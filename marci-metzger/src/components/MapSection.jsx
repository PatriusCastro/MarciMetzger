import { FaMapMarkerAlt } from 'react-icons/fa';

function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visit Our Office</h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.2357673534456!2d-116.0233493!3d36.2013456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c5d8a8c0b6f20b%3A0x8f2d1e5c5c5c5c5c!2s3190%20HW-160%2C%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1629788000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              ></iframe>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-white px-8 py-4 rounded-xl shadow-xl flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600 text-sm">3190 HW-160, Suite F, Pahrump, Nevada 89048</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://goo.gl/maps/yourGoogleMapsLink" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>Get Directions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
