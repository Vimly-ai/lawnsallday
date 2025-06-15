import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">About Lawns All Day</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Lawns All Day, your trusted partner for comprehensive lawn care and landscaping services.
            With years of experience serving our community, we've built a reputation for excellence,
            reliability, and outstanding customer service.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team of skilled professionals is passionate about creating and maintaining beautiful outdoor
            spaces. We understand that your lawn is more than just grass – it's an extension of your home
            and a reflection of your pride in your property.
          </p>
          <p className="text-lg text-gray-700">
            From routine lawn maintenance to complete landscape transformations, we approach every project
            with the same dedication to quality and attention to detail. Choose Lawns All Day and experience
            the difference that professional care can make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;