import Section from '../../components/section'
import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import { getAllLocations } from '../../lib/api'

export async function getStaticProps() {

    const locationsData = await getAllLocations()

    return { 
        props: { locationsData }
    }
}

export default function Location({ locationsData }) {
    return (
        <Layout>
            <h1>Locations</h1>
            <p>This is the locations introduction.</p>
            <Section>
                    <Row justifyContentCenter>
            {locationsData.edges.map((edge,index) => {
                const { node } = edge;
                return <Col sm={6} md={4} lg={3} key={index}>
                    <Card node={node} parentPath="locations" />
                </Col>
                })}
            </Row>
                </Section>
        </Layout>
    )
}
