import Head from 'next/head'
import Layout from '../components/Layout'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Scroller from '../components/Scroller';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BC Components</title>
        <meta name="description" content="BC Components Home Page" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className='py-16 sm:px-16'>
          <div className=''>
            <Carousel interval={2500} autoPlay={true} infiniteLoop={true}>
              <div>
                <img src="/images/slideshow/Slide1.png" alt="image1" />

              </div>
              <div>
                <img src="/images/slideshow/Screenshot (250).png" alt="image2" />
                <p className="legend">Image 2</p>

              </div>
              <div>
                <img src="/images/slideshow/Screenshot (263).png" alt="image3" />
                <p className="legend">Image 3</p>

              </div>
              <div>
                <img src="/images/slideshow/Screenshot (372).png" alt="image4" />
                <p className="legend">Image 4</p>

              </div>
            </Carousel>
          </div>

          <div className='my-20'>
            <h1 className='text-center mx-auto text-5xl text-secondary my-10 sm:text-4xl'>Our Principals</h1>
            <Scroller />
          </div>
          <div className="mx-auto text-center my-10">
            <Button className='bg-secondary text-dark w-[150px] h-[50px] rounded-full mx-auto sm:mb-0 mb-10'><Link href='/linecard'>View All</Link></Button>
          </div>
          <div className="mb-10">
            <ContactForm />
          </div>
        </Layout>
      </main>
    </>
  )
}
