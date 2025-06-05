import React, { useEffect, useState } from 'react';
import digitaly from '/gtech.jpg';
import digitalyHeroImg from '/digitaly.jpg';
import demo from '/fmcg.webp';
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaBolt, FaMobileAlt, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DialKaraikudi from '/Dialkaraikudi.jpg';
import DigiAIQuest from '/DigiAIQuest.jpg';
import ERP from '/ERP.jpg';
import HRMS from '/HRMS.jpg';
import Invoice from '/Invoice.jpg';
import jobs from '/Jobs.jpg'
import news from '/News.jpg'
import Expense from '/Mobile App.jpg'
import ecom from '/E-Commerce.jpg'
import { motion } from 'framer-motion'; // <-- Add this line

const features = [
    { icon: <FaBolt className="text-2xl" />, title: 'Fast Delivery', color: 'bg-indigo-100 text-indigo-600', description: 'Rapid implementation and deployment of digital solutions to get you to market faster.' },
    { icon: <FaMobileAlt className="text-2xl" />, title: 'Mobile Solutions', color: 'bg-blue-100 text-blue-600', description: 'Cutting-edge mobile applications tailored to your business needs and customer expectations.' },
    { icon: <FaCloud className="text-2xl" />, title: 'Cloud Integration', color: 'bg-amber-100 text-amber-600', description: 'Seamless cloud services that scale with your business and ensure data accessibility.' },
    { icon: <FaLock className="text-2xl" />, title: 'Secure Systems', color: 'bg-green-100 text-green-600', description: 'Enterprise-grade security protocols to protect your data and customer information.' },
];

const products = [
    {
        img: DialKaraikudi,
        title: "Dial Karaikudi",
        description: "Karaikudi's most trusted local business discovery platform. Find restaurants, repair services, medical centers, and more with verified contact details, customer ratings, and special offers. Our comprehensive directory helps you discover the best local businesses while helping merchants connect with their ideal customers. Whether you need a plumber at midnight or the best biryani in town, Dial Karaikudi has you covered with real-time availability and exclusive local deals.",
        tags: ["Business Directory", "Local Services", "Community Platform", "Verified Listings"],
        status: "Coming Soon"
    },
    {
        img: jobs,
        title: "Digitaly Jobs",
        description: "Karaikudi's premier employment platform bridging the gap between talent and opportunity. Job seekers can explore thousands of verified listings across IT, healthcare, education, manufacturing and more. Employers benefit from our smart matching algorithm that connects them with qualified local candidates. Featuring resume building tools, interview scheduling, salary insights, and career resources - everything you need for your professional journey in the Karaikudi region.",
        tags: ["Career Portal", "Job Search", "Recruitment", "Employment"],
        status: "Under Development"
    },
    {
        img: news,
        title: "Digitaly News",
        description: "Your hyper-local news source for everything happening in and around Karaikudi. Get real-time updates on local events, business openings, traffic alerts, weather forecasts, and community stories that matter. Our team of local journalists brings you accurate, timely reporting on politics, education, culture, and developments shaping our city. Stay informed with personalized news feeds, emergency notifications, and exclusive coverage of Karaikudi's growth story.",
        tags: ["Local News", "Community Updates", "Events", "Karaikudi"],
        status: "Coming Soon"
    }
];

const saas = [
    {
        img: DigiAIQuest,
        title: "AI Quiz",
        description: "Interactive quiz platform powered by AI to create engaging assessments for education and recruitment.",
        tags: ["Education", "Assessment", "AI"],
        status: "Ready to launch"
    },
    {
        img: ERP,
        title: "ERP Solutions",
        description: "Customizable enterprise resource planning systems tailored for small and medium businesses.",
        tags: ["Business", "Management", "Automation"],
        status: "Live"
    },
    {
        img: ecom,
        title: "E-commerce Suite",
        description: "End-to-end e-commerce platform with integrated payment gateways and inventory management.",
        tags: ["Retail", "Online Store", "Payments"],
        status: "Under Development"
    },
    {
        img: HRMS,
        title: "Trakko",
        description: "Human resource management system with employee lifecycle automation and analytics.",
        tags: ["HR", "Management", "Workforce"],
        status: "Under Development"
    },
    {
        img: Invoice,
        title: "Invoice Pro",
        description: "Automated invoicing and billing system with financial reporting and analytics.",
        tags: ["Finance", "Billing", "Accounting"],
        status: "Live"
    },
    {
        img: Expense,
        title: "Expense Tracker",
        description: "Mobile app for tracking expenses and managing personal or business finances.",
        tags: ["Finance", "Expenses", "Mobile App"],
        status: "Under Development"
    },
];

const Digitaly = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Animation variants for hero section
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased bg-gray-50 text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
                <img
                    src={digitalyHeroImg}
                    alt="Digital Transformation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center px-8">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-7xl mx-auto w-full"
                    >
                        <div className="max-w-2xl">
                            <h1 className=" text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Digital Innovation</span>
                            </h1>
                            <p className="text-sm md:text-lg text-gray-100 mb-8">
                                We deliver cutting-edge digital solutions tailored to help your business thrive in the modern marketplace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
                                    onClick={() => navigate('/contact-us')}
                                >
                                    Connect with us <FiArrowRight className="inline ml-2" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold">OUR SOLUTIONS</span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-2">
                            Digital Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Tailored for Growth</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            We combine technical expertise with industry knowledge to deliver solutions that drive real business results.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`${feature.color} bg-opacity-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2`}
                            >
                                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-3xl mb-6 mx-auto shadow-sm">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-start md:text-center">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            {/* Products Section */}
            <section id="products" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className='relative'>
                        {/* Dots along the map line */}
                        {products.map((_, index) => (
                            <div
                                key={index}
                                className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10"
                                style={{ top: `calc(${18 + index * 32}% - 24px)` }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white border-4 border-indigo-500 shadow-xl flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 animate-pulse"></div>
                                </div>
                            </div>
                        ))}

                        <div className="text-center mb-16 relative z-10">
                            <span className="text-blue-600 font-semibold">OUR PRODUCTS</span>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-2">
                                Digital Platforms <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">for the Community</span>
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
                            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                                We build products that solve real problems for businesses and individuals in our community.
                            </p>
                        </div>
                        <div className='relative'>
                            {/* Enhanced Map UI Line with glow effect */}
                    <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 -translate-x-1/2 z-0 shadow-lg shadow-blue-400/30 animate-pulse"></div>
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:flex-row w-full gap-8 mb-20 items-center relative z-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                                >
                                    <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                                        <div className="relative w-full max-w-lg">
                                            <img
                                                src={product.img}
                                                alt={product.title}
                                                className="w-full h-auto rounded-xl shadow-xl"
                                            />
                                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${product.status === "Live" ? "bg-green-100 text-green-800" :
                                                product.status === "Under developing" ? "bg-blue-100 text-blue-800" :
                                                    "bg-purple-100 text-purple-800"
                                                }`}>
                                                {product.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-8">
                                        <h2 className='text-3xl font-bold mb-4 text-gray-900'>{product.title}</h2>
                                        <p className='text-lg text-gray-600 mb-6'>{product.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {product.tags.map((tag, i) => (
                                                <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SaaS Solutions Section */}
            <section id="saas" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-blue-600 font-semibold">SAAS SOLUTIONS</span>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-2">
                            Business Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">for Modern Enterprises</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            Our suite of SaaS products helps businesses of all sizes streamline operations and boost productivity.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
                        {saas.map((product, index) => (
                            <div key={index} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group'>
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500'
                                    />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${product.status === "Live" ? "bg-green-100 text-green-800" :
                                        product.status === "Ready to launch" ? "bg-blue-100 text-blue-800" :
                                            "bg-purple-100 text-purple-800"
                                        }`}>
                                        {product.status}
                                    </div>
                                </div>
                                <div className='p-6'>
                                    <h2 className='text-xl font-bold mb-3 text-gray-900'>{product.title}</h2>
                                    <p className='text-gray-600 mb-4'>{product.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {product.tags.map((tag, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white py-12 shadow-sm mt-20 rounded-xl">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                                    <div className="text-gray-600">Successful Projects</div>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                                    <div className="text-gray-600">Client Satisfaction</div>
                                </div>
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                                    <div className="text-gray-600">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Let's discuss how Digitaly can help you achieve your digital goals and drive business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer"
                            onClick={() => navigate('/contact-us', { state:  { slug: 'digitaly-ai-solutions' } })}
                        >
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Digitaly;