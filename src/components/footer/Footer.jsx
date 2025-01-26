  import React, { useContext } from 'react'
  import myContext from '../../context/data/myContext'
  import { Link } from 'react-router-dom';

  function Footer() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
      <div>
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="container px-5 py-24 mx-auto" >
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to="/" className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
                  </li>
                  <li>
                    <Link to="/order" className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</Link>
                  </li>
                  <li>
                    <Link to="/allproducts" className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>All Product </Link>
                  </li>
                  <li>
                    <Link to="/cart" className="text-gray-600 hover:text-gray-800 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                  </li>
                  <li>
                    <Link to={'/about'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                  </li>
                  <li>
  <Link to={'https://wa.me/918209980746' } target="_blank"className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
  <a href="https://wa.me/918209980746" target="_blank" rel="noopener noreferrer" className="ml-2 text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>
    
  </a>
</li>
                </nav>
              </div>

              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
              <Link to={'/'} className='flex'>
                <div className="flex ">
                  <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h1>
                </div>
              </Link>
              <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 E-bharat — GuruMukh
                <a href="" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}></a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a href="https://github.com/GuruMukhPrajapati" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
</a>
                <a href="https://x.com/GouravParajapat"  target="_blank"className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/gurumukhprajapat/" target="_blank" className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/gurumukh/"  target="_blank"className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  export default Footer