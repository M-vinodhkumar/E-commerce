import React from "react";
import { FaCamera, FaVideo, FaCogs, FaCompactDisc } from "react-icons/fa";

const Home = ({ addToCart, buyNow }) => {
    const products = [
        { id: 1, name: "Canon EOS R50", price: 999.0, image: "/src/images/Canon.webp", Description: "Canon EOS R50 24.2MP Mirrorless Camera (18-45 mm Lens, 5-Axis Electronic Image Stabilization)" },
        { id: 2, name: "Sony A7 III", price: 1499.0, image: "/src/images/303425_0_Xo4POLg9J.webp",Description: "SONY Alpha 6700M 26MP Mirrorless Camera (18-135 mm Lens, 23.3 x 15.5 mm Sensor, BIONZ XR Image Processor)" },
        { id: 3, name: "Nikon 50mm f/1.8", price: 199.0, image: "/src/images/312192_cwlo5r.webp",Description: "Nikon Z 50II 20.9MP Mirrorless Camera (16-50 mm and 50-250 mm Lens, 23.5 x 15.7 mm Sensor, TFT Touch Sensitive LCD)" },
        { id: 4, name: "Action Camera", price: 299.0, image: "/src/images/PCP_camera_righttype_action_16may2023_wyfttk.webp",Description: "GoPro Hero 4K and 12MP 60 FPS Waterproof Action Camera with Rear LCD Touchscreen (Black)" },
        { id: 5, name: "GoPro", price: 559.0, image: "/src/images/300424_0_axpdwi.webp", Description: "GoPro Hero12 5.3K and 27MP 240 FPS Waterproof Action Camera with Voice Control (Black)" },
        { id: 5, name: "GoPro", price: 349.0, image: "/src/images/263094_0_xmxxzf.webp", Description: "Insta360 X3 8K and 72MP 60 FPS Waterproof Action Camera with Magic Third Person Views (Black)" },
    ];


    
    return (
        <div className="bg-gray-100">bp
            <section classN  ame="relative bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Capture Every <span className="text-yellow-400">Moment</span>
                        </h1>
                        <p className="text-lg text-gray-300">Explore the best cameras, lenses, and accessories to take your photography to the next level.</p>
                        <div className="space-x-4">
                            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">Shop Now</button>
                            <button className="border border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">Learn More</button>
                        </div>
                    </div>
                    <div className="flex-1 mt-10 md:mt-0">
                        <img src="/src/images/head.webp" alt="Camera Hero" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <FaCamera className="text-4xl text-yellow-400 mb-3" />
                        <h3 className="font-semibold">DSLR</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <FaVideo className="text-4xl text-yellow-400 mb-3" />
                        <h3 className="font-semibold">Mirrorless</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <FaCogs className="text-4xl text-yellow-400 mb-3" />
                        <h3 className="font-semibold">Lenses</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
                        <FaCompactDisc className="text-4xl text-yellow-400 mb-3" />
                        <h3 className="font-semibold">Accessories</h3>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
                                <img src={product.image} alt={product.name} className="rounded-lg mb-4" />
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-600">${product.price}</p>
                                <p className="text-gray-600">{product.Description}</p>
                                <button onClick={() => addToCart(product)} className="mt-3 w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-500 transition">
                                    Add to Cart
                                </button>
                                <button onClick={() => buyNow({ ...product, qty: 1 })} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
