import { useState, useEffect } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';

// Move businessHours outside the component to avoid dependency issues
const businessHours = {
  Monday: { open: '08:00', close: '19:00' },
  Tuesday: { open: '08:00', close: '19:00' },
  Wednesday: { open: '08:00', close: '19:00' },
  Thursday: { open: '08:00', close: '19:00' },
  Friday: { open: '08:00', close: '19:00' },
  Saturday: { open: '08:00', close: '19:00' },
  Sunday: { open: '08:00', close: '19:00' }
};

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const getNextOpeningTime = () => {
    const now = new Date();
    const currentHour = now.getHours();
    
    if (currentHour < 8) {
      return 'Opening today at 8:00 AM';
    } else if (currentHour >= 19) {
      return 'Opening tomorrow at 8:00 AM';
    }
    return 'Opening at 8:00 AM';
  };

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'long' });
      const time = now.getHours() * 100 + now.getMinutes();
      
      const hours = businessHours[day];
      const openTime = parseInt(hours.open.replace(':', ''));
      const closeTime = parseInt(hours.close.replace(':', ''));
      
      return time >= openTime && time < closeTime;
    };

    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setIsOpen(checkIfOpen());
    }, 60000); // Update every minute

    setIsOpen(checkIfOpen());
    return () => clearInterval(interval);
  }, []); 

  const socialLinks = [
    { 
      icon: FaFacebookF, 
      href: 'https://www.facebook.com/MarciHomes/',
      label: 'Facebook'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/marciandlauren_nvrealtors/',
      label: 'Instagram'
    },
    { 
      icon: FaLinkedinIn, 
      href: 'https://www.linkedin.com/in/marci-metzger-30642496/',
      label: 'LinkedIn'
    },
    { 
      icon: FaYelp, 
      href: 'https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump',
      label: 'Yelp'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          
          <div className="flex flex-col items-center mb-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg inline-flex items-center gap-2 mb-2">
              <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></span>
              <span className="font-medium">{isOpen ? 'We\'re Open' : 'Currently Closed'}</span>
            </div>
            {!isOpen && (
              <div className="text-gray-600 text-center">
                <p>{getNextOpeningTime()}</p>
                <p className="text-sm mt-1">Feel free to leave a message and we'll get back to you!</p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Call or Text</h3>
                    <a href="tel:2069196886" className="text-blue-600 hover:text-blue-800 block">
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    {Object.entries(businessHours).map(([day, hours]) => {
                      const isToday = day === currentTime.toLocaleDateString('en-US', { weekday: 'long' });
                      return (
                        <div 
                          key={day}
                          className={`flex justify-between py-2 px-4 rounded-lg transition-colors
                            ${isToday ? 'bg-blue-50 text-blue-900' : ''}`}
                        >
                          <span className={isToday ? 'font-medium' : ''}>{day}</span>
                          <span className="text-gray-600">{hours.open} - {hours.close}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full p-4 pt-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full p-4 pt-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    rows="4"
                    className="peer w-full p-4 pt-8 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
                  >
                    Your Message
                  </label>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Send Message
                </button>

                <a 
                  href="https://wa.me/2069196886"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Message on WhatsApp
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
