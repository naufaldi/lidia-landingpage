import React from 'react'
import TitleSection from '@/components/ui/title-section'

interface FeatureItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[280px]">
      <div className="h-[102px] w-[102px] rounded-[24px] flex justify-center items-center bg-primary mb-[20px]">
        <Icon className='h-[45px] w-[45px] text-white' />
      </div>
      <h3 className='mb-[28px] font-bold text-[24px] text-center'>{title}</h3>
      <p className='font-semibold text-center'>{description}</p>
    </div>
  );
};

interface FeatureProps {
  dataItems: FeatureItemProps[];
  sectionTitle: string;
  sectionSubtitle: string;
}

const Feature: React.FC<FeatureProps> = ({ dataItems, sectionTitle, sectionSubtitle }) => {
  return (
    <section id="feature" className='container mx-auto w-full mb-[200px]'>
      <div className="grid grid-cols-12 gap gap-[12px]">
        <div className="col-span-6 flex flex-col">
          <TitleSection sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
        </div>
        <div className="col-span-12 flex justify-between">
          {
            dataItems.map((item, index) => (
              <FeatureItem
                key={index}
                Icon={item.Icon}
                title={item.title}
                description={item.description}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Feature