import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = ({ order }) => {
    if (!order || order.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
                <h1 className="text-2xl font-bold">No order found.</h1>
                <Link to="/" className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
                    Back to Home
                </Link>
            </div>
        );
    }

    const totalAmount = order.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful 🎉</h1>
            <p className="text-gray-600 mb-6">Thank you for your purchase! Here is your order summary:</p>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                {order.map((item) => (
                    <div key={item.id} className="flex justify-between mb-2">
                        <span>{item.name} (x{item.qty})</span>
                        <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                ))}
                <div className="border-t mt-4 pt-4 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
            </div>

            <Link
                to="/"
                className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default Success;
