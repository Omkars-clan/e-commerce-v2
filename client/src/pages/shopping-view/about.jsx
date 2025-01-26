function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Welcome to our ecommerce platform, where quality meets convenience. We're dedicated to providing you with the best shopping experience possible.
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              To provide high-quality products at competitive prices while ensuring an exceptional shopping experience for our customers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p>
              To become the most trusted and preferred online shopping destination by consistently delivering value and satisfaction to our customers.
            </p>
          </div>
        </div>
        <div className="bg-muted p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quality Products</li>
            <li>Competitive Prices</li>
            <li>Fast Shipping</li>
            <li>Excellent Customer Service</li>
            <li>Secure Shopping Experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 