import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/profile/BC_Components_Logo.png'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Footer = () => {
  return (
    <div>
      <footer className='w-full sm:bg-secondary border-t-2 border-secondary font-medium text-lg sm:text-base'>

        <Layout className='py-8 sm:py-16 flex items-center justify-around dark:text-light lg:flex-col lg:py-6'>

          <div>
            <h3 className='text-center mt-2 sm: py-2'>Site Map</h3>
            <List className="align-middle">
              <ListItem className='!justify-center text-primary'>
                <Link href='/about' ><ListItemText className='text-center'
                  primary="About"
                /></Link>
              </ListItem>
              <ListItem className='justify-center text-primary'>
                <Link href='/linecard'><ListItemText className='text-center'
                  primary="Line Card"
                /></Link>
              </ListItem>
            </List>
          </div>

          <div className="sm: py-2">
            <Image
              src={logo}
              width={250}
              height={250}
              alt="Logo"
            />
          </div>

          <div>
            <h3 className='text-center mt-2 sm: py-2'>Get in Touch</h3>
            <List className="align-middle">
              <ListItem>
                <ListItemText className='text-center text-primary'
                  primary="Call us"
                  secondary="+91-22-40052332"
                />
              </ListItem>
              <ListItem>
                <ListItemText className='text-center text-primary'
                  primary="Email"
                  secondary="bc@bccomp.net"
                />
              </ListItem>
            </List>
          </div>
        </Layout>

        <Layout className='py-8 flex items-center justify-around dark:text-light lg:flex-col lg:py-6'>
          <span className='text-center'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className='flex items-center lg:py-2 sm:flex-col sm:items-center sm:justify-center'>
            <span className='text-center'>Made by&nbsp;<a href="https://khushgandhi.tech/" target='_blank' className='text-footer dark:text-secondary'>Khush Gandhi</a></span>
          </div>
        </Layout>
      </footer>
    </div>
  )
}

export default Footer