import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Address */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Visit us or send us a message. We’re here to help you find your ideal stay.
          </p>
          <div className="text-gray-700 space-y-2">
            <p><strong>Address:</strong> 123 PG Lane, Near XYZ Market, New Delhi</p>
            <p><strong>Email:</strong> pgfinder@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
