import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    const mailtoLink = `mailto:pgfinder@example.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Hi PGFinder,%0D%0A%0D%0AMy name is ${name}.%0D%0A${message}%0D%0A%0D%0AYou can reply to me at: ${email}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Address Section */}
        <div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            Visit us or send us a message. We’re here to help you find your ideal stay.
          </p>
          <div className="text-gray-700 space-y-2 mb-4">
            <p><strong>Address:</strong> 123 PG Lane, Near XYZ Market, New Delhi</p>
            <p><strong>Email:</strong> pgfinder@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow hover:bg-green-200 transition text-center"
            >
              WhatsApp
            </a>
            <a
              href="https://www.google.com/maps/place/123+PG+Lane,+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-200 transition text-center"
            >
              View Map
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
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
