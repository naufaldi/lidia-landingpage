import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="container mx-auto relative mb-[200px]">
      <nav className='grid grid-cols-12 gap-[12px] mt-[78px] mb-[54px] items-center relative z-10'>
        <div className='col-span-1 flex justify-start items-center'>
          <div className='text-2xl font-bold'>
            <a href="/">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </a>
          </div>
        </div>
        <div className="col-span-4 col-start-3">
          <div className="flex justify-start items-center gap-[40px]">
            <Link href="/" className='text-sm text-gray-link hover:text-blue-link transition-all'>Feature</Link>
            <Link href="/" className='text-sm text-gray-link hover:text-blue-link transition-all'>Service</Link>
            <Link href="/" className='text-sm text-gray-link hover:text-blue-link transition-all'>Review</Link>
            <Link href="/" className='text-sm text-gray-link hover:text-blue-link transition-all'>Location</Link>
          </div>
        </div>
        <div className="col-span-2 col-end-13">
          <Button variant="ghost" className='max-w-[138px] w-full py-[10px] h-[44px]'>Login</Button>
        </div>
      </nav>
      <section className='grid grid-cols-12 gap-[12px] relative z-10'>
        <div className='col-span-6 '>
          <h1 className='text-[76px] leading-normal tracking-tighter font-extrabold text-heading mb-[30px]'>
            Search & review
            your fav book effortlessly
          </h1>
          <p className='text-desc text-base mb-[34px] max-w-[500px]'>Embark on a literary journey like never before with our revolutionary
            library application! Introducing a seamless experience
            that transcends traditional boundaries, where  you
            can effortlessly search your favorite books.✨</p>
          <Button variant="default" className='max-w-[200px] w-full flex items-center justify-center h-[60px]'> Start Now <ArrowRight className='h-4 w-4' /> </Button>
        </div>
        <div className="col-span-6">
          <Image src="/image-hero.png" width={600} height={516} alt='Image Book' />
        </div>

      </section>
      <Image src="/cover.png" alt="cover image" width={700} height={713} className='absolute -top-[78px] -right-[120px] z-0' />
    </div>

  )
}

export default Hero