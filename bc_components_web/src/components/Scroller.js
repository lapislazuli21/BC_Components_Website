// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardPreview from './CardPreview';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Scroller = () => {
    return (
        <>
            <div className='flex justify-center items-center py-20 sm:hidden'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay]}
                    centeredSlides={true}
                    slidesPerView={5}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    <SwiperSlide>
                        <CardPreview image={'/images/svgs/Phoenix_Contact_Logo.png'} title={"Logo"} body={"Phoenix Contact"} url={"https://www.phoenixcontact.com/en-in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/Pro.png"} title={"Logo"} url={"https://protectron.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/Elcom_Logo.png"} title={"Logo"} url={"https://elcom-in.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/CTR_Logo.png"} title={"Logo"} url={"https://ctr.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={'/images/svgs/BC Logos/Agility_Logo.png'} title={"Logo"} url={"http://www.agility.net.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/BT_Logo.jpg"} title={"Logo"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Cedicom_Logo.jpg"} title={"Logo"} url={"http://www.cedicom.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Hummel_Logo.png"} title={"Logo"} url={"https://www.hummel.com/en/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/INCAP_Logo.jpg"} title={"Logo"} url={"https://www.incaplimited.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Keltron_logo.png"} title={"Logo"} url={"https://www.keltroncomp.org/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Prime_Logo.png"} title={"Logo"} url={"https://www.primecomponents.net/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/THK_Logo.png"} title={"Logo"} url={"https://www.thakorelectronics.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Watts_Logo.png"} title={"Logo"} url={"https://www.wattselectronics.in/"} />
                    </SwiperSlide>

                </Swiper>
                {/*Mobile Scroller*/}
            </div>
            <div className='hidden sm:flex sm:justify-center sm:items-center' >
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay]}
                    centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}

                >
                    <SwiperSlide>
                        <CardPreview image={'/images/svgs/Phoenix_Contact_Logo.png'} title={"Logo"} body={"Phoenix Contact"} url={"https://www.phoenixcontact.com/en-in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/Pro.png"} title={"Logo"} url={"https://protectron.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/Elcom_Logo.png"} title={"Logo"} url={"https://elcom-in.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/CTR_Logo.png"} title={"Logo"} url={"https://ctr.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={'/images/svgs/BC Logos/Agility_Logo.png'} title={"Logo"} url={"http://www.agility.net.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/BT_Logo.jpg"} title={"Logo"} url={"https://www.phoenixcontact.com/en-in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Cedicom_Logo.jpg"} title={"Logo"} url={"https://www.cedicom.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Hummel_Logo.png"} title={"Logo"} url={"https://www.hummel.com/en/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/INCAP_Logo.jpg"} title={"Logo"} url={"https://www.incaplimited.in/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Keltron_Logo.png"} title={"Logo"} url={"https://www.keltron.org/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Prime_Logo.png"} title={"Logo"} url={"https://www.primecomponents.net/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/THK_Logo.png"} title={"Logo"} url={"https://www.thakorelectronics.com/"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardPreview image={"/images/svgs/BC Logos/Watts_Logo.png"} title={"Logo"} url={"https://www.wattselectronics.in/"} />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
};

export default Scroller
