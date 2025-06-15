import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-green-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Lawn?
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Get your free quote today and see why homeowners trust Lawns All Day
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Call (555) 123-4567
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;