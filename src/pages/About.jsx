export default function About() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About The Figma Store</h1>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-lg">
            Welcome to The Figma Store - a marvelously considered collection of objects for our time.
          </p>

          <p className="text-gray-700">
            We believe that great design extends beyond the screen. Our carefully curated selection of products 
            embodies the principles of thoughtful design, quality craftsmanship, and creative inspiration.
          </p>

          <p className="text-gray-700">
            Each item in our collection is chosen to inspire creativity and enhance your everyday experience, 
            whether you're at your desk, out in the world, or relaxing at home.
          </p>

          <div id="contact" className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Have questions? We'd love to hear from you.
            </p>
            <p className="text-gray-700">
              Email: support@figmastore.com<br />
              Customer Service Hours: Monday - Friday, 9am - 5pm EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
