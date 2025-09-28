import React from "react";


const Contact = () => {


    return (
        <div className="bg-gray-100 min-h-screen py-16 px-6">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            
           
        
                <form className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"

                            required
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"

                            required
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Message</label>
                        <textarea
                            name="message"

                            rows="4"
                            required
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                    >
                        Send Message
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default Contact;
