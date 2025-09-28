import React from "react";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
                    About Us
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Welcome to <span className="font-bold text-yellow-500">CaptureTheMemories</span> 📸
                    – your one-stop shop for all things photography.
                    We are passionate about helping photographers, creators, and storytellers
                    bring their visions to life with the best cameras, lenses, and accessories.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our mission is to provide high-quality products and excellent service,
                    making sure every click you take is full of memories. Whether you're a beginner
                    or a professional photographer, we’ve got something for you.
                </p>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">✨ What We Offer:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Wide range of <span className="font-medium">DSLR & Mirrorless cameras</span></li>
                    <li>Professional <span className="font-medium">Lenses & Accessories</span></li>
                    <li>Affordable prices with fast shipping</li>
                    <li>Dedicated support for your photography journey</li>
                </ul>

                <div className="mt-8 text-center">
                    <p className="text-lg text-gray-800 font-medium">
                        Thank you for choosing us to be part of your photography story. 🌟
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
