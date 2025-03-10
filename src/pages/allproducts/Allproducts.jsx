import React, { useContext, useEffect, useMemo } from 'react'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'

function Allproducts() {
  const context = useContext(myContext)
  const { mode, product, searchkey, setSearchkey, filterType, setFilterType,
      filterPrice, setFilterPrice } = context

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Create a memoized array of unique categories
  const uniqueCategories = useMemo(() => {
    return [...new Set(product.map(item => item.category))];
  }, [product]);

  // Filter products based on search, category, and price
  const filteredProducts = product
    .filter((item) => item.title.toLowerCase().includes(searchkey.toLowerCase()))
    .filter((item) => filterType === '' || item.category.toLowerCase() === filterType.toLowerCase())
    .filter((item) => {
      if (filterPrice === 'all') return true;
      const price = parseInt(item.price);
      const [min, max] = filterPrice.split('-').map(Number);
      if (max) {
        return price >= min && price <= max;
      } else {
        return price >= min;
      }
    });

  return (
    <Layout>
      <Filter uniqueCategories={uniqueCategories} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
            <div className="h-1 w-20 bg-pink-600 rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item, index) => {
              const { title, price, imageUrl, id } = item;
              return (
                <div onClick={() => window.location.href = `/productinfo/${id}`} key={index} className="p-4 md:w-1/4  drop-shadow-lg ">
                  <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    <div className="flex justify-center cursor-pointer">
                      <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={imageUrl} alt="blog" />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>E-Bharat</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                      <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Allproducts