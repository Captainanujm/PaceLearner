import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">PaceLearner</h2>
          <p className="text-gray-600 mt-2">
            Learn anything, anytime, anywhere. Join us on your journey to success.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 text-sm mb-4">Stay updated with our latest courses, offers, and news.</p>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-500 text-white px-5 py-2 rounded-r-full hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 transition text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © {new Date().getFullYear()} PaceLearner. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
