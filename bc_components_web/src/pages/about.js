import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AboutTile from '../components/AboutTile'

const About = () => {


  return (
    <>
      <Head>
        <title>About | BC Components</title>
        <meta name="description" content="BC Components About Page" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className='py-2'>
          <h1 className='pb-8 sm:pt-8 sm:pb-4 text-5xl font-mono font-semibold sm:text-center sm:text-4xl sm:my-4'>Meet Our Pillars</h1>
          <hr className='border-secondary' />
          <div className='py-4'> {/*Team*/}
            <AboutTile name={"Vijay Bhayani"} description={"Mr. Vijay Bhayani brings a wealth of experience and industry insight to our company. Over the years, he has mastered every facet of the industry and his leadership, honed through years of experience, guides our company into the future."} />
            {/*<hr className='border-dark w-20 sm:hidden' />*/}
            <AboutTile name={"Prashant Gandhi"} description={"Mr. Prashant Gandhi brings his zeal and creative ideas to our company, revolutionizing it at every stage. He has built a sterling reputation for his creative ideas and transformative leadership, driving our company towards innovative solutions within the ever-evolving landscape of the industry."} />
          </div>
          <h1 className='py-8 sm:pt-4 sm:pb-4 text-5xl font-mono font-semibold sm:text-center sm:text-4xl sm:my-4'>About Us</h1>
          <hr className='border-secondary pb-8' />
          <div className='flex flex-row items-start justify-around text-center py-16 my-4 bg-slate-300 rounded-lg sm:hidden'>
            <div className="w-1/2 h-full px-4 sm:w-full sm:h-1/2">
              <div className='flex flex-col justify-around'>
                <h2 className='text-4xl h-1/2 pb-6 font-mono font-medium text-primary'>Who we are</h2>
                <h3 className='text-xl sm:text-base text-start'>Our parent company was established in <span className='font-semibold'>1985</span>, initially as a distributor of general electronic components. In no time, we became the <span className='font-semibold'>most trusted</span> channel partner for all our valued principals</h3>
                <br />
                <h3 className='text-xl sm:text-base text-start'>With our <span className='font-semibold'>expansive product portfolio and unbeatable customer satisfaction</span>, BC Components has also become an integral part of the Indian electronic industry. </h3>
              </div>
            </div>
            <figure className='bg-secondary mx-8'>
              <svg width="5" height="250" viewBox='0 0 100 100'></svg>
            </figure>
            <div className="w-1/2 px-4">
              <div className='flex flex-col'>
                <h2 className='text-4xl h-1/3 pb-6 font-medium font-mono text-primary'>What we do</h2>
                <h3 className='text-xl sm:text-base text-start'>We cater to OEMs in <span className='font-semibold'>Power, Automation, Energy, Lighting, Instumentation</span> and many other industrial sectors.</h3>
                <br />
                <h3 className='text-xl sm:text-base text-start'>We strive to provide the best experience to our customers, team, and principals. Their support has allowed us to become <span className='font-semibold'>one of the most value-added service providers</span> in the industry today. </h3>
              </div>
            </div>
          </div>
          {/*Mobile View*/}
          <div className='hidden sm:flex sm:flex-col sm:items-center sm:bg-slate-300'>
            <div className='sm:p-4 sm:flex sm:flex-col sm:items-center'>
              <h1 className='sm:text-xl sm:text-primary font-mono sm:font-semibold'>Who we are</h1>
              <p>T1</p>
            </div>
            <hr className='sm:border-primary sm:w-1/2' />
            <div className='sm:p-4 sm:flex sm:flex-col sm:items-center'>
              <h1 className='sm:text-xl sm:text-primary sm:font-semibold'>What we do</h1>
              <p>T2</p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default About