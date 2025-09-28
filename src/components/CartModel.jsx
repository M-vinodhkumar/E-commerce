import React from "react";

const CartModal = ({ cart, updateQty, removeFromCart, clearCart, buyNow, onClose }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                {cart.length === 0 ? (
                    <p className="text-gray-600">Cart is empty.</p>
                ) : (
                    <ul className="space-y-4 max-h-80 overflow-y-auto pr-2">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col bg-gray-100 p-3 rounded"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p>${item.price}</p>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <button
                                                    onClick={() => updateQty(item.id, "dec")}
                                                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                                                >
                                                    -
                                                </button>
                                                <span>{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, "inc")}
                                                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>

                                {/* Buy Now Button */}
                                <div className="mt-2 flex justify-end">
                                    <button
                                        onClick={() => buyNow(item)}
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {cart.length > 0 && (
                    <div className="mt-6 flex justify-between items-center">
                        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                        <div className="flex space-x-3">
                            <button
                                onClick={clearCart}
                                className="bg-gray-300 text-black px-4 py-2 rounded font-semibold hover:bg-gray-400"
                            >
                                Clear Cart
                            </button>
                            <button className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500">
                                Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
