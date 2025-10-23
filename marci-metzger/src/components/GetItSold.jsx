import { BsCheckCircleFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

function GetItSold() {
  const images = [
    '../assets/get-it-sold/top-residential.webp',
    '../assets/get-it-sold/dont-just-list.webp',
    '../assets/get-it-sold/guide-to-buyers.webp'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="relative mb-12 md:mb-0">
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <img 
                src={images[currentImageIndex]}
                alt={`Luxury Property ${currentImageIndex + 1}`}
                className="w-full h-[300px] md:h-[500px] object-cover transition-opacity duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-2">
                <BsCheckCircleFill className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                <span className="text-xl md:text-2xl font-bold text-blue-600">Get it Sold!</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="grid gap-4 md:gap-6">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Top Residential Sales Last 5 Years</h3>
                <p className="text-sm md:text-base text-gray-600">We helped nearly 90 clients in 2021, and closed 28.5 million in sales! 
Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Don't Just List it,</h3>
                <p className="text-sm md:text-base text-gray-600">Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Guide to Buyers</h3>
                <p className="text-sm md:text-base text-gray-600">Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetItSold;
