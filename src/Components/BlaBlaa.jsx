import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const BlaBlaa = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Your Company</h2>
            <p>Building the future, one line of code at a time.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
            <p>Email: info@yourcompany.com</p>
            <p>Phone: +1 234 567 8901</p>
            <p>Location: Southampton , UK</p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Newsletter</h2>
            <p>Subscribe to get the latest updates.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default BlaBlaa
// 