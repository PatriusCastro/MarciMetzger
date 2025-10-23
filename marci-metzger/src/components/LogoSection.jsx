function LogoSection() {
  const logos = [
    '../assets/logos/ridge-realty-group.webp',
    '../assets/logos/equal-housing-opportunity.webp',
    '../assets/logos/realtor.webp',
    '../assets/logos/pahrump-valley.webp',
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="h-16 md:h-20 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
