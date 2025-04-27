import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import { AuthProvider } from './context/AuthContext'; // You might still use authContext for some things
import { calculateTotals } from './store/store';



import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import BottomNavigation from './components/layout/BottomNavigation';

// Pages
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import CategoryPage from './pages/Category/CategoryPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import CartPage from './pages/Cart/CartPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrderTrackingPage from './pages/OrderTracking/OrderTrackingPage';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch the calculateTotals action when the app loads
        dispatch(calculateTotals());
    }, [dispatch]);

    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-grow">
                            <Routes>
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/" element={<HomePage />} />
                                <Route path="/signup" element={<SignupPage />} />
                                <Route path="/category/:id" element={<CategoryPage />} />
                                <Route path="/product/:id" element={<ProductDetailPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/checkout" element={<CheckoutPage />} />
                                <Route path="/orders/:id" element={<OrderTrackingPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                            </Routes>
                        </main>
                        <Footer />
                        <BottomNavigation />
                    </div>
                </Router>
            </AuthProvider>
        </Provider>
    );
}

export default App; 