import React from 'react'
import ContainerGrid from '../ui/container-grid'
import Image from 'next/image'
import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <>
      <ContainerGrid>
        <div className="col-span-10 col-start-2 flex justify-between ">
          <div className="flex flex-col items-center">
            <h5 className='font-bold text-2xl mb-[26px]'>Managed By</h5>
            <Image src="/logo-footer.png" width={248} height={94} alt='Logo Footer' />
          </div>
          <div className="flex flex-col items-center">
            <h5 className='font-bold text-2xl mb-[52px]'>Social Media</h5>
            <div className="flex gap-[18px]">
              <TwitterLogoIcon className='w-10 h-10 text-black ' />
              <InstagramLogoIcon className='w-10 h-10 text-black' />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h5 className='font-bold text-2xl mb-[60px]'>Slogan</h5>
            <p className='text-xl font-medium text-black'>#RentFavBooks</p>
          </div>
        </div>
      </ContainerGrid>
      <footer className='bg-primary flex justify-center items-center h-[120px]'>
        <p className='font-bold text-sm text-white'>© 2024 Lidia. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer