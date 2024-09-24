import React from 'react'

const ContainerGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className='container mx-auto w-full mb-[200px]'>
      <div className="grid grid-cols-12 gap gap-[12px]">
        {children}
      </div>
    </section>
  );
};
export default ContainerGrid