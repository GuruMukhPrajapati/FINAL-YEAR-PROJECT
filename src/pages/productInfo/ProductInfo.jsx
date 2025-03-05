import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import { fireDB } from '../../fireabase/FirebaseConfig';

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const [products, setProducts] = useState('')
    const [selectedSize, setSelectedSize] = useState(null)
    const [isLiked, setIsLiked] = useState(false)
    const params = useParams()
    
    // Get user data from redux
    const user = useSelector((state) => state.user?.user);

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            setProducts(productTemp.data());
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const addCart = (products) => {
        if (!selectedSize) {
            toast.error('Please select a size first');
            return;
        }
        
        // Check if user is logged in
        if (!user) {
            toast.error('Please login first');
            return;
        }
        
        const productWithSize = {
            ...products,
            selectedSize: selectedSize
        }
        dispatch(addToCart(productWithSize));
        toast.success('Added to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    }

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {products && 
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                            src={products.imageUrl}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                BRAND NAME
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {products.title}
                            </h1>
                            
                            <div className="flex mb-4">
                                {/* ... existing rating code ... */}
                            </div>
                            
                            <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                {products.description}
                            </p>

                            <div className="flex items-center mb-5">
                                <span className="mr-3">Size</span>
                                <div className="flex items-center space-x-3">
                                    <button 
                                        className={`border py-2 px-4 rounded-md ${
                                            selectedSize === 'M' 
                                                ? 'bg-indigo-500 text-white' 
                                                : 'border-gray-300'
                                        }`}
                                        onClick={() => setSelectedSize('M')}
                                    >
                                        M
                                    </button>
                                    <button
                                        className={`border py-2 px-4 rounded-md ${
                                            selectedSize === 'L' 
                                                ? 'bg-indigo-500 text-white' 
                                                : 'border-gray-300'
                                        }`}
                                        onClick={() => setSelectedSize('L')}
                                    >
                                        L
                                    </button>
                                </div>
                            </div>

                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    ₹{products.price}
                                </span>
                                <button 
                                    onClick={() => addCart(products)} 
                                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                >
                                    Add To Cart
                                </button>
                                <button 
                                    onClick={handleLikeClick}
                                    className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 transition-colors duration-200"
                                    style={{ 
                                        backgroundColor: isLiked ? '#fee2e2' : '#eee',
                                        color: isLiked ? '#ef4444' : '#6b7280'
                                    }}
                                >
                                    <svg
                                        fill={isLiked ? "currentColor" : "none"}
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>}
                </div>
            </section>
        </Layout>
    )
}

export default ProductInfo