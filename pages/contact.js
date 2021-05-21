// next.js components
import Head from 'next/head'

// custom components
import Layout from '../components/layout'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact | Starbucks</title>
                <meta name="description" content="A contact page"/>
            </Head>
            <h1>Contact Page</h1>
        </Layout>
    )
}