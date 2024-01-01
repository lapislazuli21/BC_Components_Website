import { React, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/profile/BC_Components_Logo.png'
import { FacebookIcon, MailIcon } from './Icons'
import { easeInOut, motion } from "framer-motion"

const MotionImage = motion(Image)

const CustomLink = ({ href, title, className = "" }) => {

  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group ${router.asPath === href ? 'text-primary' : 'text-dark'}`}>
      {title}
      <span className={`h-[2px] inline-block bg-primary absolute
          left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </Link>
  )
}

const MobileLink = ({ href, title, className = "", toggle }) => {

  const router = useRouter();

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
      {title}
      <span className={`h-[2px] inline-block bg-primary absolute
          left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >&nbsp;</span>
    </button>
  )
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className=' w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-6 overflow-x-clip'>

        <button className='hidden flex-col items-center justify-center lg:flex' onClick={handleClick}>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='w-full flex justify-between items-center lg:hidden '>
          <nav>
            <CustomLink href='/' title="Home" className='mr-4'>Home</CustomLink>
            <CustomLink href='/about' title="About" className='mx-4'>About Us</CustomLink>
            <CustomLink href='/linecard' title="Line-Card" className='mx-4'>Line Card</CustomLink>
          </nav>
          <nav className='flex items-center justify-center flex-wrap sm:hidden'>
            <motion.a href='https://www.facebook.com/Bccompelectronics/' target='_blank' title='FaceBook' className='mr-4' whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }}>
              <FacebookIcon />
            </motion.a>
            <motion.a href='mailto:bc@bcomp.net' target='_blank' title='Email' className='mx-4' whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }}>
              <MailIcon />
            </motion.a>
          </nav>
        </div>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
          <Link href='/'>
            <MotionImage src={logo} alt="Logo" className='w-40 h-20 mt-2' whileHover={{ x: 8 }} transition={{ ease: easeInOut }} />
          </Link>
        </div>

        {
          isOpen ?
            <motion.div initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }} transition={{ type: "spring", duration: 0.75 }}
              className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'>
              <nav className='flex items-center flex-col justify-center'>
                <MobileLink href="/" title="Home" className='mb-2' toggle={handleClick} />
                <MobileLink href="/about" title="About" className='my-2' toggle={handleClick} />
                <MobileLink href="/linecard" title="Line-Card" className='my-2' toggle={handleClick} />
                {/* <CustomLink href="/about2" title="About 2" className='ml-4'/> */}
              </nav>
              <nav className='flex items-center justify-center flex-wrap my-2 mx-auto'>
                <motion.a href="https://www.facebook.com/Bccompelectronics/" target='_blank' title="FaceBook" whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-20 my-2'>
                  <FacebookIcon />
                </motion.a>
                <motion.a href="mailto:bc@bcomp.net" target='_blank' title="Email" whileHover={{ y: -4 }} whileTap={{ scale: 0.8 }} className='w-15 my-2'>
                  <MailIcon />
                </motion.a>
              </nav>
            </motion.div>
            : null
        }
      </header>
    </>
  )
}

export default Navbar
