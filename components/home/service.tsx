import React from 'react';
import ContainerGrid from '@/components/ui/container-grid';
import TitleSection from '../ui/title-section';
import Image from 'next/image';

const Service = () => {
  return (
    <ContainerGrid>
      <div className="col-span-12">
        <TitleSection
          sectionSubtitle='🚀• The Services for You'
          sectionTitle='SERVICES'
        />
      </div>
      <div className="col-span-6 mb-[140px]">
        <Image
          src="/left-service.png"
          alt="Rent Book Easly"
          width={600}
          height={400}
          className="shadow-[0px_0px_60px_0px_rgba(71,74,87,0.25)]"
        />
      </div>
      <div className="col-span-5 col-end-13 flex flex-col">
        <h3 className='text-[32px] font-medium mb-[40px] '>Rent your favorite book
          fairly easy on Lidia!</h3>
        <p className='text-base text-desc'>Viewing, rent, and organize your favorite books has
          never been easier. An integrated digital library rent
          that’s simple to use, Lidia lets you spend less time
          managing your work and more time actually doing it!
          Effortless rentals, personalized shelves—Lidia
          transforms book management, enhancing your
          reading experience~</p>
      </div>

      <div className="col-span-5  flex flex-col">
        <h3 className='text-[32px] font-medium mb-[40px] '>Quick Book Rentals:
          Dive into Reading Instantly</h3>
        <p className='text-base text-desc'>VDiscover instant literary delight. Access a vast library,
          borrow your favorite reads, and dive into captivating
          stories within minutes. Reading made quick and easy,
          just a click away!<br />Unlock a world of stories effortlessly.
          Browse genres, choose, rent in minutes.
          Seamlessly manage your reading adventures
          with our intuitive platform~</p>
      </div>
      <div className="col-span-6 col-end-13">
        <Image
          src="/right-service.png"
          alt="Rent Book Easly"
          width={600}
          height={400}
          className="shadow-[0px_0px_60px_0px_rgba(71,74,87,0.25)]"
        />
      </div>
    </ContainerGrid>
  );
};

export default Service;