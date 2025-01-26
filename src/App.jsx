import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// it is a test commin so that i can se what is happened
// it is another hello
// now 
// now again 

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/Allproducts';
import AboutPage from './pages/about/About';

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/productinfo/:id' element={<ProductInfo/>} />
          
          {/* Protected Routes */}
          <Route path="/order" element={
            <ProtectedUserRoute>
              <Order />
            </ProtectedUserRoute>
          } />
          <Route path="/cart" element={
            <ProtectedUserRoute>
              <Cart />
            </ProtectedUserRoute>
          } />

          {/* Admin Routes */}
          <Route path="/dashboard" element={
            <ProtectedAdminRoute>
              <Dashboard />
            </ProtectedAdminRoute>
          } />
          <Route path='/addproduct' element={
            <ProtectedAdminRoute>
              <AddProduct/>
            </ProtectedAdminRoute>
          } />
          <Route path='/updateproduct' element={
            <ProtectedAdminRoute>
              <UpdateProduct/>
            </ProtectedAdminRoute>
          } />

          {/* 404 Route */}
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </Router>
    </MyState>
  )
}

export default App 

// Protected Route for Regular Users
export const ProtectedUserRoute = ({children}) => {
  const user = localStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  try {
    // Verify user data is valid JSON
    JSON.parse(user);
    return children;
  } catch (error) {
    // If user data is corrupted, clear it and redirect
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }
}

// Protected Route for Cart
export const ProtectedCartRoute = ({children}) => {
  const user = localStorage.getItem('user');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (cart.length === 0) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

// Protected Route for Admin
export const ProtectedAdminRoute = ({children}) => {
  const user = localStorage.getItem('user');
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  try {
    const userData = JSON.parse(user);
    if (userData?.user?.email === 'gourav2004prajapat@gmail.com') {
      return children;
    } else {
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    localStorage.removeItem('user');
    return <Navigate to="/login" replace />;
  }
}

// Higher Order Component to handle loading states
const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const [isLoading, setIsLoading] = React.useState(true);
    
    React.useEffect(() => {
      // Simulate checking auth state
      const checkAuth = async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        setIsLoading(false);
      };
      
      checkAuth();
    }, []);
    
    if (isLoading) {
      return <div>Loading...</div>; // You can replace this with a proper loading component
    }
    
    return <WrappedComponent {...props} />;
  };
};

// Wrap your protected components with withAuth if you want loading states
const ProtectedOrder = withAuth(Order);
const ProtectedCart = withAuth(Cart);
const ProtectedDashboard = withAuth(Dashboard);