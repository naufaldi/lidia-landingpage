import React from 'react'


interface TitleSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
}


const TitleSection: React.FC<TitleSectionProps> = ({ sectionTitle, sectionSubtitle }) => {
  return (
    <>
      <h6 className='text-primary text-lg font-extrabold mb-[10px]'>{sectionTitle}</h6>
      <h2 className='text-[48px] mb-[90px] font-extrabold text-black'>{sectionSubtitle}</h2>
    </>
  )
}

export default TitleSection