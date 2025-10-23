function About() {
  return (
    <section id="about" className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Marci Metzger</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With cearly 3 decades of experience in Pahrump real estate, I bring deep market knowledge and dedicated service to help you find the perfect home. My commitment is to make your real estate journey smooth and successful.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a first-time homebuyer, looking to upgrade, or interested in investment properties, I provide personalized attention and expert guidance throughout the entire process.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                <p className="text-sm text-gray-600">Homes Sold</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">25+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="../assets/marci.png" 
              alt="Marci Metzger" 
              className="rounded-lg"
            />
            <div className="absolute bottom-6 right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold">Top Real Estate Agent</p>
              <p className="text-sm">Pahrump, Nevada Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
