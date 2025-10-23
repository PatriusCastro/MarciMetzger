function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img 
          src="../assets/hero-bg.png" 
          alt="Luxury Real Estate Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find Your Dream Home in North Texas
          </h1>
          <p className="text-xl mb-8">
            Expert Real Estate Services with a Personal Touch
          </p>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
