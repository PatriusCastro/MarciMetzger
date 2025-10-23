function SearchListings() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <img 
          src="../assets/search-bg.png" 
          alt="Search Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">Search Listings</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600">
                  <option>Any Location</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600">
                  <option>Any Type</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Least Expensive to Most</option>
                  <option>Most Expensive to Least</option>
                  <option>Bedrooms (Low to High)</option>
                  <option>Bedrooms (High to Low)</option>
                  <option>Bathrooms (Low to High)</option>
                  <option>Bathrooms (High to Low)</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600">
                  <option>Any Number</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Baths</label>
                <select className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600">
                  <option>Any Number</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600" placeholder="$" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 py-2.5 px-4 text-gray-600" placeholder="$" />
              </div>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchListings;
