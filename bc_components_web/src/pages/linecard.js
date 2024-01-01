import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const linecard = () => {
    return (
        <>
            <Head>
                <title>Line Card | BC Components</title>
                <meta name="description" content="BC Components Line Card" />
            </Head>
            <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
                <Layout className='py-16'>
                    <div className='flex items-center justify-center'>
                        <iframe width={1920} height={1080} allowfullscreen="allowfullscreen" class="fp-iframe" src="https://heyzine.com/flip-book/761a5168ef.html" loading='eager'></iframe>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default linecard 