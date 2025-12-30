export default function FAQ() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">What is The Figma Store?</h2>
            <p className="text-gray-700">
              The Figma Store offers a curated collection of objects that inspire creativity and design thinking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">How do I place an order?</h2>
            <p className="text-gray-700">
              Browse our products, select your size and quantity, then add to cart. Follow the checkout process to complete your purchase.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">What payment methods do you accept?</h2>
            <p className="text-gray-700">
              We accept all major credit cards, debit cards, and other secure payment methods.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">How long does shipping take?</h2>
            <p className="text-gray-700">
              Shipping typically takes 5-7 business days for domestic orders. International shipping may take longer.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">What is your return policy?</h2>
            <p className="text-gray-700">
              We accept returns within 30 days of purchase. Items must be unused and in original condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
