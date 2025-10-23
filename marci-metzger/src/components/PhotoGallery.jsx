import { useState } from 'react';

function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: '../assets/photo-gallery/1st.webp',
    },
    {
      src: '../assets/photo-gallery/2nd.webp',
    },
    {
      src: '../assets/photo-gallery/3rd.webp',
    },
    {
      src: '../assets/photo-gallery/4th.webp',
    },
    {
      src: '../assets/photo-gallery/5th.webp',
    },
    {
      src: '../assets/photo-gallery/6th.webp',
    },
    {
      src: '../assets/photo-gallery/7th.webp',
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Photo Gallery</h2>
        
        <div className="w-full mx-auto">
          <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <div key={index} 
                className="relative flex-none group cursor-pointer w-[200px] md:w-[300px]"
                onClick={() => setSelectedImage(image)}
              >
                <div className="rounded-xl overflow-hidden h-[350px] md:h-[450px] bg-gradient-to-b from-gray-900/10 to-gray-900">
                  <img 
                    src={image.src}
                    alt={`Property ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/20 transition-all duration-300"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-7xl w-full">
            <img 
              src={selectedImage.src}
              alt="Selected property view"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;
