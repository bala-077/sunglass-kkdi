import React, { useEffect } from 'react';
import {
    FaShoppingBasket,
    FaUtensils,
    FaHome,
    FaFirstAid,
    FaTruck,
    FaWarehouse,
    FaStore,
    FaChartLine,
    FaMapMarkerAlt,
    FaUsers,
    FaBoxes,
    FaPercentage,
    FaHeadset,
    FaGlassCheers
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import fmcg from '/fmcgs.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Fmcg = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-white">
            {/* Hero Section - Updated to blue/indigo gradient */}
            <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
                <img
                    src={fmcg}
                    alt="FMCG Distribution"
                    className="w-full h-full object-cover"
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center px-4 sm:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            className="max-w-2xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h1 className="text-3xl  md:text-5xl font-bold text-white mb-4 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">FMCG Distribution</span> Network
                            </h1>
                            <p className="text-base sm:text-sm md:text-lg text-gray-100 mb-8">
                                Powering Karaikudi's retail ecosystem with efficient, tech-driven supply chain solutions
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer text-sm sm:text-base"
                                    onClick={() => navigate('/contact-us', { state: { slug: 'fmcg' } })}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Partner With Us <FiArrowRight className="inline ml-2" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                {/* Enhanced Introduction */}
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">
                            Karaikudi's Most Reliable Distribution Partner
                        </span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6" />

                    <p className="text-sm  md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Combining <span className="font-semibold text-blue-600">local market expertise</span> with <span className="font-semibold text-indigo-600">modern supply chain solutions</span>, we bridge the gap between manufacturers and retailers with unmatched efficiency.
                    </p>
                </div>

                {/* Features Grid with Enhanced UI */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {[
                        {
                            icon: <FaTruck className="text-blue-600 text-3xl" />,
                            title: "Smart Logistics",
                            desc: "Route-optimized delivery fleet with real-time tracking",
                            bg: "bg-blue-100"
                        },
                        {
                            icon: <FaWarehouse className="text-indigo-600 text-3xl" />,
                            title: "Strategic Warehousing",
                            desc: "Temperature-controlled storage facilities",
                            bg: "bg-indigo-100"
                        },
                        {
                            icon: <FaChartLine className="text-purple-600 text-3xl" />,
                            title: "Data Analytics",
                            desc: "Demand forecasting & inventory optimization",
                            bg: "bg-purple-100"
                        },
                        {
                            icon: <FaUsers className="text-amber-600 text-3xl" />,
                            title: "Retail Support",
                            desc: "Merchandising and promotional assistance",
                            bg: "bg-amber-100"
                        }
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                            <div className={`${feature.bg} p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-2 sm:mb-4">{feature.title}</h3>
                            <p className="text-base sm:text-lg text-gray-600 text-center">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Enhanced Product Categories */}
                <div className="mb-12 md:mb-8">
                    <h2 className="text-2xl  md:text-3xl font-bold text-gray-800 mb-10 md:mb-6 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-indigo-400">
                            Our Product Portfolio
                        </span>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mt-6" />

                    </h2>

                    <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        {[
                            {
                                title: "Staples & Groceries",
                                icon: <FaShoppingBasket className="text-blue-600 text-2xl" />,
                                desc: "Essential food items with consistent quality and availability",
                                tags: ["Rice & Pulses", "Edible Oils", "Spices & Masalas", "Flours"],
                                border: "border-blue-500"
                            },
                            {
                                title: "Packaged Foods",
                                icon: <FaUtensils className="text-indigo-600 text-2xl" />,
                                desc: "Convenience foods for modern lifestyles",
                                tags: ["Biscuits & Cookies", "Snacks & Chips", "Noodles & Pasta", "Breakfast Cereals"],
                                border: "border-indigo-500"
                            },
                            {
                                title: "Beverages",
                                icon: <FaGlassCheers className="text-purple-600 text-2xl" />,
                                desc: "Complete range of hot and cold drinks",
                                tags: ["Tea & Coffee", "Health Drinks", "Juices", "Soft Drinks"],
                                border: "border-purple-500"
                            },
                            {
                                title: "Personal Care",
                                icon: <FaFirstAid className="text-red-600 text-2xl" />,
                                desc: "Health and hygiene products for all needs",
                                tags: ["Soaps & Shampoos", "Oral Care", "Feminine Hygiene", "Baby Care"],
                                border: "border-red-500"
                            },
                            {
                                title: "Home Care",
                                icon: <FaHome className="text-indigo-600 text-2xl" />,
                                desc: "Products for complete home maintenance",
                                tags: ["Detergents", "Dishwash", "Cleaners", "Pooja Needs"],
                                border: "border-indigo-500"
                            },
                            {
                                title: "Confectionery",
                                icon: <FaPercentage className="text-pink-600 text-2xl" />,
                                desc: "Sweet treats and indulgence products",
                                tags: ["Chocolates", "Candies", "Chewing Gum", "Mints"],
                                border: "border-pink-500"
                            }
                        ].map((category, index) => (
                            <div key={index} className={`bg-white p-4 sm:p-6 rounded-xl shadow-md border-l-4 ${category.border} hover:translate-y-[-5px] transition-transform`}>
                                <div className="flex items-center mb-4">
                                    <div className={`${category.border.replace('border', 'bg')}100 p-3 sm:p-4 rounded-lg mr-3 sm:mr-4`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-sm md:text-lg font-semibold text-gray-800">{category.title}</h3>
                                </div>
                                <p className="text-base md:text-sm text-gray-600 mb-4 sm:mb-6">{category.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {category.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={`${category.border.replace('border', 'bg')}100 ${category.border.replace('border', 'text')}-800 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Distribution Network Section */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-8 sm:mb-12 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/3 mb-6 sm:mb-8 lg:mb-0 lg:pr-6 sm:lg:pr-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                    Our Supply Chain Advantage
                                </span>
                            </h2>
                            <p className="text-sm md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                                Our <span className="font-semibold text-blue-600">tech-enabled distribution network</span> ensures products move efficiently from manufacturers to retailers' shelves with <span className="font-semibold text-indigo-600">minimal waste and maximum freshness</span>.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
                                {[
                                    { icon: <FaTruck className="text-blue-500 text-2xl" />, text: "GPS-tracked fleet for real-time monitoring" },
                                    { icon: <FaWarehouse className="text-blue-500 text-2xl" />, text: "Hub-and-spoke distribution model" },
                                    { icon: <FaChartLine className="text-blue-500 text-2xl" />, text: "Automated inventory replenishment" },
                                    { icon: <FaStore className="text-blue-500 text-2xl" />, text: "Retailer app for easy ordering" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="mt-1 mr-3 sm:mr-4 flex-shrink-0 text-xl sm:text-2xl">{item.icon}</span>
                                        <span className="text-base sm:text-lg text-gray-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3 bg-white p-4  rounded-xl shadow-md border border-blue-100 md:p-4">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-600 flex items-center">
                                <FaHeadset className="mr-3 text-xl sm:text-2xl" /> Why Partner With Us
                            </h3>
                            <ul className="space-y-2 sm:space-y-4">
                                {[
                                    "Direct-to-retailer distribution",
                                    "Competitive margins",
                                    "Regular promotional support",
                                    "Shelf-life management",
                                    "Market intelligence reports",
                                    "Dedicated account managers"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm mt-1">
                                            {index + 1}
                                        </span>
                                        <span className="text-base sm:text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats Section - New Addition */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-500 mb-8 sm:mb-14 py-6 sm:py-10 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl  md:text-3xl font-bold mb-6 sm:mb-12 text-center">
                            Our Distribution Network in Numbers
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-10 text-center">
                            <div>
                                <div className="text-xl md:text-2xl font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2">
                                    <FaStore className="w-6 h-6 sm:w-8 sm:h-8" /> 750+
                                </div>
                                <p className="text-blue-100 text-sm md:text-lg">Retail Partners</p>
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2">
                                    <FaBoxes className="w-6 h-6 sm:w-8 sm:h-8" /> 100+
                                </div>
                                <p className="text-blue-100 text-sm md:text-lg">Brands Distributed</p>
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl font-bold mb-2 sm:mb-4 flex items-center justify-center gap-2">
                                    <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8" /> 15+
                                </div>
                                <p className="text-blue-100 text-sm md:text-lg">Localities Served</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brand Partnership Section - New Addition */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 mb-8 sm:mb-12">
                    <div className="text-center mb-6 sm:mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                Brand Partnership Program
                            </span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
                            We help FMCG brands establish and grow their presence in the Karaikudi market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            {
                                title: "Market Entry",
                                icon: <FaMapMarkerAlt className="text-blue-600 text-2xl sm:text-3xl" />,
                                features: ["Distribution setup", "Retail mapping", "Launch support", "Local promotions"]
                            },
                            {
                                title: "Growth Partners",
                                icon: <FaChartLine className="text-indigo-600 text-2xl sm:text-3xl" />,
                                features: ["Shelf share expansion", "Visibility programs", "Sales analytics", "Retailer training"]
                            },
                            {
                                title: "Premium Services",
                                icon: <FaPercentage className="text-amber-600 text-2xl sm:text-3xl" />,
                                features: ["Cold chain distribution", "Premium positioning", "Experiential marketing", "Digital integrations"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                                <div className="bg-white p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-md">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">{service.title}</h3>
                                <ul className="space-y-2 sm:space-y-4">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start">
                                            <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0 text-xs sm:text-sm">
                                                ✓
                                            </span>
                                            <span className="text-base sm:text-lg text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Call to Action */}
                <div className="text-center py-6 sm:py-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-4">
                    <h2 className="text-2xl  md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Transform Your Distribution?</span>
                    </h2>
                    <p className="text-sm  md:text-lg text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto">
                        Connect with Karaikudi's most efficient FMCG distribution network
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                        <button
                            className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white font-semibold py-3 px-8 sm:py-4 sm:px-12 rounded-full shadow-lg transition-all flex items-center justify-center text-sm sm:text-base"
                            onClick={() => navigate('/contact-us', { state: { slug: 'efmcg' } })}
                        >
                            Get Started <FiArrowRight className="ml-2 sm:ml-3 text-lg sm:text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fmcg;