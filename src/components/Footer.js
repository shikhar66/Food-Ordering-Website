import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-lime-50 py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Peak Web</h2>
            <p className="mb-4">
              Leading provider of innovative solutions. We specialize in cutting-edge technology to help your business grow.
            </p>
            <p>© 2024 Company Name. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
            
              <li><Link className="hover:underline" to="/">Home</Link></li>
              <li><Link className="hover:underline" to="/about">About Us</Link></li>
              <li><Link className="hover:underline" to="/contact">Contact</Link></li>
              <li><Link className="hover:underline" to="/instamart">Instamart</Link></li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">684, 2nd Street Rajendra Nagar</p>
            <p className="mb-2">Lucknow,UP,26004</p>
            <p className="mb-2">Email: shikhardixit20@gmail.com</p>
            <p className="mb-2">Phone: (+91) 6392567209</p>
          </div>

          {/* Social Media Links */}
          <div className="w-full lg:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/shikhar-dixit-816bb3204/" className="text-gray-400 hover:text-white">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h11.1v-9.33H9.69V11.1h3.18V8.41c0-3.15 1.88-4.88 4.77-4.88 1.39 0 2.84.26 2.84.26v3.16h-1.6c-1.57 0-2.06.98-2.06 1.99v2.38h3.51l-.56 3.57h-2.95V24h5.78c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM5.34 20.45H2.34v-11h3V20.45zM3.83 8.63c-1.02 0-1.83-.83-1.83-1.85S2.81 5 3.83 5s1.83.83 1.83 1.85-0.81 1.78-1.83 1.78zM20.45 20.45h-3v-5.55c0-1.32-0.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.93v5.65h-3v-11h2.88v1.5h0.04c0.4-0.76 1.38-1.56 2.84-1.56 3.03 0 3.59 1.99 3.59 4.57V20.45z"></path>
                </svg>
              </a>
              <a href="https://github.com/shikhar66" className="text-gray-400 hover:text-white">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577v-2.165c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.774.42-1.304.763-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.469-2.382 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.654 1.649.242 2.872.118 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.431.371.816 1.103.816 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="https://shikhar66.github.io/Portfolio-Website/" className="text-gray-400 hover:text-white">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.49 0-9.96 4.48-9.96 9.98 0 5.5 4.47 9.98 9.96 9.98 5.49 0 9.96-4.48 9.96-9.98 0-5.5-4.47-9.98-9.96-9.98zm0 18.22c-4.41 0-7.98-3.57-7.98-7.98 0-4.41 3.57-7.98 7.98-7.98s7.98 3.57 7.98 7.98c0 4.41-3.57 7.98-7.98 7.98zm-.02-14.79c-.64 0-1.15.52-1.15 1.15 0 .64.52 1.15 1.15 1.15.64 0 1.15-.52 1.15-1.15 0-.63-.52-1.15-1.15-1.15zm0 2.57a6.46 6.46 0 00-3.28-.9c-1.75 0-3.29.71-4.38 1.88-.69.7-1.22 1.55-1.52 2.52-.03.09-.05.19-.07.28-.09.37-.16.75-.16 1.14v.17c0 .1.01.2.02.3a1.31 1.31 0 01-.04-.42c0-.9.33-1.77.92-2.43.98-1.15 2.4-1.85 3.92-1.85 1.33 0 2.62.48 3.64 1.3.62.49 1.09 1.14 1.38 1.85.06.16.1.33.13.5.09.48.16.97.16 1.47 0 1.01-.28 1.99-.82 2.83-.52.81-1.24 1.48-2.07 1.95-.84.48-1.77.74-2.73.74a6.53 6.53 0 01-2.89-.67c-.55-.26-1.07-.57-1.57-.94.53-.53 1.11-1.03 1.72-1.49.66-.49 1.35-.91 2.08-1.25.74-.35 1.38-.64 1.95-.89z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
  };


  export default Footer;