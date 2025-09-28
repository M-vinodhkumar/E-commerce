import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CartModal from "./components/CartModel";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const itemExists = prevCart.find((item) => item.id === product.id);
            if (itemExists) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQty = (id, type) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1),
                    }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    // 🔹 Buy Now handler (works for cart + product cards)
    const buyNow = (item) => {
        alert(`You bought "${item.name}" for $${item.price * item.qty}`);
        // Optionally remove item from cart if it was in cart
        setCart((prevCart) => prevCart.filter((p) => p.id !== item.id));
    };

    return (
        <div>
            <Navbar
                cart={cart}
                onCartClick={() => setShowCart(true)}
                onSearch={setSearchQuery} // 🔹 pass search handler
            />
            <Home addToCart={addToCart} buyNow={buyNow} searchQuery={searchQuery} />
            <Contact />
            <About />

            {showCart && (
                <CartModal
                    cart={cart}
                    updateQty={updateQty}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    buyNow={buyNow}
                    onClose={() => setShowCart(false)}
                />
            )}
        </div>
    );
};

export default App;
