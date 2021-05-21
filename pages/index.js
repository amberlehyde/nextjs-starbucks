// next.js components
import Head from 'next/head'
import Image from 'next/image'

// custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import Col from '../components/col'
import Row from '../components/row'

// styles


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content="A home page."/>
            </Head>
            <section>
            <Row>
                <Col>
                    <Image
                    src={`/images/menu.jpg`}
                    width="800px"
                    height="300px"
                    alt="Menu image"
                    /> 
                    <h1>Menu</h1>
                    <p>The highest quality coffees from farms around the world.</p>
                    <Button 
                        label="View menu" 
                        path="/menu"
                        type="primary" 
                    />
                </Col>
                <Col>
                    <Image
                    src={`/images/location.jpg`}
                    width="800px"
                    height="300px"
                    alt="Location image"
                    /> 
                    <h1>Locations</h1>
                    <p>Find a Starbucks location near you and pick up your favorite coffee.</p>
                    <Button 
                        label="View locations" 
                        path="/locations"
                        type="primary" 
                    />
                </Col>
            </Row>
            </section>
        </Layout>
    )
}
