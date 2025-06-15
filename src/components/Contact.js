import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Phone:</p>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-700">info@lawnsallday.com</p>
              </div>
              <div>
                <p className="font-semibold">Hours:</p>
                <p className="text-gray-700">Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 8:00 AM - 4:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
              <div>
                <p className="font-semibold">Service Area:</p>
                <p className="text-gray-700">Proudly serving the greater metropolitan area and surrounding communities</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">Request a Quote</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500">
                <option value="">Select Service</option>
                <option value="lawn-mowing">Lawn Mowing</option>
                <option value="landscaping">Landscaping</option>
                <option value="fertilization">Fertilization</option>
                <option value="aeration">Aeration</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Tell us about your project"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;