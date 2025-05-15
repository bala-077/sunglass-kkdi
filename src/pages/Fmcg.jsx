import React, { useEffect } from 'react';
import {
    FaShoppingBasket,
    FaUtensils,
    FaHome,
    FaFirstAid,
    FaTruck,
    FaWarehouse,
    FaStore,
    FaChartLine
} from 'react-icons/fa';
import fmcg from '/fmcg.webp';
import { useNavigate } from 'react-router-dom';

const Fmcg = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full bg-white">
            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    src={fmcg}
                    alt="FMCG Distribution"
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                            FMCG Distribution Network
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-100">
                            Serving Karaikudi with reliable product distribution
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction */}
                <div className="mb-12">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        We act as direct distributors for several reputed FMCG brands, servicing both rural and urban markets in and around Karaikudi. Our distribution model is designed to ensure timely supply, product availability, and efficient logistics.
                    </p>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
                            <div className="bg-green-100 p-3 rounded-full mr-4">
                                <FaTruck className="text-green-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Efficient Logistics</h3>
                                <p className="text-gray-600">Timely deliveries with our optimized supply chain network.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <FaWarehouse className="text-blue-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Local Warehousing</h3>
                                <p className="text-gray-600">Strategic storage locations for quick distribution.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
                            <div className="bg-orange-100 p-3 rounded-full mr-4">
                                <FaStore className="text-orange-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Retail Partnerships</h3>
                                <p className="text-gray-600">Strong relationships with local shops and vendors.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex items-start">
                            <div className="bg-purple-100 p-3 rounded-full mr-4">
                                <FaChartLine className="text-purple-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Market Insights</h3>
                                <p className="text-gray-600">Data-driven approach to inventory and distribution.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Categories */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <FaShoppingBasket className="mr-3 text-green-600" />
                        Product Categories We Handle
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Category 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-green-500">
                            <div className="flex items-center mb-3">
                                <div className="bg-green-100 p-2 rounded-lg mr-4">
                                    <FaShoppingBasket className="text-green-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Daily Groceries</h3>
                            </div>
                            <p className="text-gray-600 mb-3">Essential food items for everyday consumption.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Rice</span>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Pulses</span>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Spices</span>
                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Edible Oils</span>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-yellow-500">
                            <div className="flex items-center mb-3">
                                <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                                    <FaUtensils className="text-yellow-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Packaged Food & Snacks</h3>
                            </div>
                            <p className="text-gray-600 mb-3">Convenient food products for quick consumption.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Biscuits</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Chips</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Instant Foods</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Ready-to-Eat</span>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-blue-500">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                    <FaHome className="text-blue-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Household & Cleaning</h3>
                            </div>
                            <p className="text-gray-600 mb-3">Products for home maintenance and cleanliness.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Soaps</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Detergents</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Dish Wash</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Cleaners</span>
                            </div>
                        </div>

                        {/* Category 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 border-l-4 border-red-500">
                            <div className="flex items-center mb-3">
                                <div className="bg-red-100 p-2 rounded-lg mr-4">
                                    <FaFirstAid className="text-red-600 text-xl" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Health & Wellness</h3>
                            </div>
                            <p className="text-gray-600 mb-3">Products for personal care and wellbeing.</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Sanitary</span>
                                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Herbal</span>
                                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">First-Aid</span>
                                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Personal Care</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Distribution Network */}
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 mb-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                            <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                                <FaTruck className="mr-3 text-green-600" />
                                Our Distribution Network
                            </h2>
                            <p className="mb-4 text-gray-600">
                                We ensure products reach every corner of Karaikudi and surrounding areas with our efficient supply chain.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FaStore className="mt-1 mr-3 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">500+ retail partners in our network</span>
                                </li>
                                <li className="flex items-start">
                                    <FaWarehouse className="mt-1 mr-3 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">Strategic warehousing locations</span>
                                </li>
                                <li className="flex items-start">
                                    <FaChartLine className="mt-1 mr-3 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">Inventory management systems</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/3 bg-green-50 p-6 rounded-xl border border-green-100">
                            <h3 className="font-semibold mb-3 text-green-600">Key Advantages</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                                    <span className="text-gray-700">Competitive pricing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                                    <span className="text-gray-700">Reliable deliveries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                                    <span className="text-gray-700">Product availability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                                    <span className="text-gray-700">Brand partnerships</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center py-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner With Our Distribution Network</h2>
                    <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                        Whether you're a brand looking for distribution or a retailer seeking reliable supply.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-colors"
                          onClick={() => navigate('/contact', { state: { details: { slug: 'fmcg' } } })}
                        >
                          Brand Enquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fmcg;