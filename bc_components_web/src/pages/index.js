import Head from "next/head";
import Layout from "../components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Scroller from "../components/Scroller";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | BC Components</title>
        <meta name="description" content="BC Components Home Page" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
        <Layout className="py-16 sm:px-16">
          <div className="">
            <Carousel interval={2500} autoPlay={true} infiniteLoop={true}>
              <div>
                <img src="/images/slideshow/Slide1.1.JPG" alt="image1" />
                <p className="legend">Phoenix Contact Thermomark</p>
              </div>
              {/* <div>
                <img src="/images/slideshow/Slide2.png" alt="image2" />
                <p className="legend">Image 2</p>
              </div> */}
              <div>
                <img src="/images/slideshow/Slide3.png" alt="image3" />
                <p className="legend">
                  SPE, RJ45, HDMI, USB, coaxial for printed circuit boards and
                  M12 panel feed-throughs to D-SUB connectors (Phoenix Contact)
                </p>
              </div>
              <div>
                <img src="/images/slideshow/Slide4.png" alt="image4" />
                <p className="legend">M23 Hybrid Connector (Phoenix Contact)</p>
              </div>
              <div>
                <img src="/images/slideshow/Slide5.png" alt="image5" />
                <p className="legend">
                  Phoenix Contact Heavycon EVO industrial connectors
                </p>
              </div>
            </Carousel>
          </div>

          <div className="mt-20 mb-10">
            <h1 className="text-center mx-auto text-6xl font-mono font-bold text-dark my-10 sm:text-4xl">
              Our Principals
            </h1>
            <Scroller />
          </div>
          <div className="mx-auto text-center my-10">
            <Button className="bg-secondary text-dark w-[150px] h-[50px] rounded-full mx-auto sm:mb-0 mb-10">
              <Link href="/linecard">View All</Link>
            </Button>
          </div>
          <div className="mb-10">
            <ContactForm />
          </div>
        </Layout>
      </main>
    </>
  );
}
