import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'

import { getAllLocationsSlugs, getLocationBySlug } from '../../lib/api'

export async function getStaticPaths() {

    const allSlugs = await getAllLocationsSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const locationData = await getLocationBySlug(params.id)

    return {
        props : {
            locationData
        }
    }

}

export default function Location({ locationData }) {

    const { title, featuredImage, content, locationInformation } = locationData;

    const { city, phoneNumber, state, streetAddress, zipCode} = locationInformation;
    
    const { sourceUrl, mediaDetails, altText } = featuredImage.node;

    const { width, height } = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>Back to locations</a>
                    </Link>

                </Col>
            </Row>
            <Image 
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            /> 
            <h1>{title}</h1>
            <p>{streetAddress}<br/>
            {city}, {state} {zipCode}<br/>
            {phoneNumber}
            </p>
            <div dangerouslySetInnerHTML={{ __html: content}} />
        </Layout>
    )
}