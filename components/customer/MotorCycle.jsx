import React from 'react';
import Image from 'next/image';

const Motorcycle = () => {
  return (
    <div className="motorcycle">
      <div className="motorcycle-body">
        {/* Add SVG or image for motorcycle here */}
        <Image src={'/motorcycle.png'} width={100} height={100} className=' scale-110' alt='motorcycle' />
      </div>
      <div className="fire" id="fire"></div>
    </div>
  );
};

export default Motorcycle;
