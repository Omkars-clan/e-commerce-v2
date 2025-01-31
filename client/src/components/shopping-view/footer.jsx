import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are an ecommerce platform dedicated to providing high-quality products and exceptional customer service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop/listing" className="text-gray-400 hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              123 Ecommerce Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@ecommerce.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer; 