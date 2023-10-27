import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import './Banner.css';

import LeftIcon from './svg/arrow-left-square.svg';
import RightIcon from './svg/arrow-right-square.svg';

const Speakers = (props) => {
  const images = [
    './Images/1.jpeg',
    './Images/2.jpeg',
    './Images/3.jpeg',
    './Images/4.jpeg',
    './Images/5.jpeg',
    './Images/6.jpeg',
    './Images/7.jpeg',
    './Images/8.jpeg',
  ];

  const responsive = {
    0: { items: 1 }, // Display one item per slide for all screen sizes
  };

  const customPrevButton = (
    <button className="custom-nav-button custom-prev-button">
      <img src={LeftIcon} alt="Previous" className="no-filter" />
    </button>
  );
  
  const customNextButton = (
    <button className="custom-nav-button custom-next-button">
       <img src={RightIcon} alt="Next" />
    </button>
  );

  return (
    <section className="flex flex-col justify-center w-full h-auto">
      <div className="text-center text-6xl lg:text-7xl font-roboto font-bold mt-10 mb-10">
        <span className="text-LushGreen">Speakers</span>
      </div>
      <div className="pixel-bg h-[410px] md:h-[430px] lg:h-[500px] xl:h-[600px]">
        <AliceCarousel  
          mouseDragEnabled
          buttonsDisabled
          dotsDisabled
          autoPlay
          autoPlayInterval={3000}
          responsive={responsive}
          infinite 
          items={images.map((image, index) => (
            <div key={index} className="image-slide">
              <div
                className="image-container mt-6 md:mt-16 xl:mt-12"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <img
                  className="object-cover h-auto w-[80%] md:w-[35%] lg:w-[30%]"
                  src={image}
                  alt={`Slide ${index}`}
                />
              </div>
            </div>
          ))}
          renderPrevButton={() => customPrevButton} 
          renderNextButton={() => customNextButton}
          data={{
            touchTracking: true, // Enable touch/swipe support
          }}
        />
      </div>
    </section>
  );
};

export default Speakers;