function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <img 
              src="../assets/logos/marci-logo.webp"
              alt="Marci Metzger Homes"
              className="h-12 w-auto"
            />
            <div className="text-sm text-gray-600">
              <p>3190 HW-160, Suite F</p>
              <p>Pahrump, Nevada 89048</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Marci Metzger Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
