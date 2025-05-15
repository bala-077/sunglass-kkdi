import React, { useEffect, useState } from 'react';
import digitaly from '/gtech.jpg';
import demo from '/fmcg.webp';
import { FiArrowRight, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaBolt, FaMobileAlt, FaCloud, FaLock, FaChartLine, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import DialKaraikudi from './DialKaraikudi.jpg';
// import DigiAIQuest from '/DigiAIQuest.jpg';
// import ERP from '/ERP.jpg';
// import HRMS from '/HRMS.jpg';
// import Invoice from '/Invoice.jpg';



const features = [
    { icon: <FaBolt className="text-2xl" />, title: 'Fast Delivery', color: 'bg-indigo-100 text-indigo-600', description: 'Rapid implementation and deployment of digital solutions to get you to market faster.' },
    { icon: <FaMobileAlt className="text-2xl" />, title: 'Mobile Solutions', color: 'bg-blue-100 text-blue-600', description: 'Cutting-edge mobile applications tailored to your business needs and customer expectations.' },
    { icon: <FaCloud className="text-2xl" />, title: 'Cloud Integration', color: 'bg-amber-100 text-amber-600', description: 'Seamless cloud services that scale with your business and ensure data accessibility.' },
    { icon: <FaLock className="text-2xl" />, title: 'Secure Systems', color: 'bg-green-100 text-green-600', description: 'Enterprise-grade security protocols to protect your data and customer information.' },
];

const products = [
    {
        img: demo,
        title: "Dial Karaikudi",
        description: "A comprehensive local business directory and service platform connecting Karaikudi residents with trusted providers.",
        tags: ["Directory", "Local Business", "Services"],
        status: "Coming Soon"
    },
    {
        img: demo,
        title: "Digitaly Jobs",
        description: "Job portal specializing in connecting skilled professionals with tech companies in the Karaikudi region.",
        tags: ["Employment", "Recruitment", "Career"],
        status: "Under developing"
    },
    {
        img: demo,
        title: "Digitaly News",
        description: "Hyper-local news aggregator delivering relevant updates and stories from Karaikudi and surrounding areas.",
        tags: ["News", "Local", "Updates"],
        status: "Coming Soon"
    },
];

const saas = [
    {
        img: demo,
        title: "Trakko",
        description: "Comprehensive fleet management and logistics optimization platform for transport businesses.",
        tags: ["Logistics", "Fleet Management", "Tracking"],
        status: "Under developing"
    },
    {
        img: demo,
        title: "AI Quiz",
        description: "Interactive quiz platform powered by AI to create engaging assessments for education and recruitment.",
        tags: ["Education", "Assessment", "AI"],
        status: "Ready to launch"
    },
    {
        img: demo,
        title: "ERP Solutions",
        description: "Customizable enterprise resource planning systems tailored for small and medium businesses.",
        tags: ["Business", "Management", "Automation"],
        status: "Live"
    },
    {
        img: demo,
        title: "E-commerce Suite",
        description: "End-to-end e-commerce platform with integrated payment gateways and inventory management.",
        tags: ["Retail", "Online Store", "Payments"],
        status: "Live"
    },
    {
        img: demo,
        title: "Booking App",
        description: "Multi-service booking platform for appointments, reservations, and service scheduling.",
        tags: ["Scheduling", "Appointments", "Services"],
        status: "Under developing"
    },
    {
        img: demo,
        title: "Invoice Pro",
        description: "Automated invoicing and billing system with financial reporting and analytics.",
        tags: ["Finance", "Billing", "Accounting"],
        status: "Live"
    },
];

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     role: "CEO, Karaikudi Traders",
//     content: "Digitaly transformed our traditional business into a digital powerhouse. Their solutions helped us increase online sales by 300% in just six months.",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Priya Anand",
//     role: "Marketing Director, TN Foods",
//     content: "The mobile app developed by Digitaly has become an essential tool for our customer engagement strategy. The team's attention to detail is remarkable.",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "Vikram Sundar",
//     role: "Operations Head, Chettinad Logistics",
//     content: "Trakko has revolutionized how we manage our fleet. Real-time tracking and analytics have reduced our operational costs by 22%.",
//     avatar: "https://randomuser.me/api/portraits/men/67.jpg"
//   }
// ];

const Digitaly = () => {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div className="font-sans antialiased bg-gray-50 text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-screen max-h-[80vh] overflow-hidden">
                <img
                    src={digitaly}
                    alt="Digital Transformation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                                Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Digital Innovation</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-100 mb-8">
                                We deliver cutting-edge digital solutions tailored to help your business thrive in the modern marketplace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium cursor-pointer" onClick={() => navigate('/contact')}>
                                    Connect with us <FiArrowRight className="inline ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold">OUR SOLUTIONS</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-2">
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

            {/* Who We Are Section */}
            <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={demo} alt="Digitaly Team" className="rounded-xl shadow-2xl w-full h-auto" />
                        </div>
                        <div>
                            <span className="text-blue-600 font-semibold">ABOUT US</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-2">
                                Driving Digital Transformation in Karaikudi
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Founded in 2015, Digitaly has been at the forefront of digital innovation in the Karaikudi region. We specialize in creating custom digital solutions that address local business challenges while meeting global standards.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">10+ years of combined industry experience</p>
                                </div>
                                <div className="flex items-start">
                                    <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">Local expertise with global technology standards</p>
                                </div>
                                <div className="flex items-start">
                                    <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-700">Customer-centric approach to solution design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold">OUR PRODUCTS</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-2">
                            Digital Platforms <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">for the Community</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            We build products that solve real problems for businesses and individuals in our community.
                        </p>
                    </div>

                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row w-full gap-8 mb-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                        >
                            <div className="w-full lg:w-1/2 flex justify-center items-center">
                                <div className="relative w-full max-w-lg">
                                    <img src={product.img} alt={product.title} className="w-full h-auto rounded-xl shadow-xl" />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${product.status === "Live" ? "bg-green-100 text-green-800" : product.status === "Beta" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
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
                                <button className="self-start bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-2 rounded-lg hover:shadow-md transition-all flex items-center">
                                    Explore Product <FiArrowRight className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SaaS Solutions Section */}
            <section className="py-20 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold">SAAS SOLUTIONS</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-2">
                            Business Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">for Modern Enterprises</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
                        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                            Our suite of SaaS products helps businesses of all sizes streamline operations and boost productivity.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {saas.map((product, index) => (
                            <div key={index} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden'>
                                <div className='relative'>
                                    <img src={product.img} alt={product.title} className='w-full h-48 object-cover' />
                                    {/* <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl font-bold">View Details</span>
                  </div> */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${product.status === "Live" ? "bg-green-100 text-green-800" : product.status === "Beta" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>
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
                                    {/* <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm">
                    Learn More <FiArrowRight className="ml-1" />
                  </button> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="bg-white py-12 shadow-sm mt-10 md:mt-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                                <div className="p-4">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
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

            {/* Testimonials */}
            {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 mt-2">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Clients Say</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto" />
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
              <div className="flex items-center mb-6">
                <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">
                "{testimonials[currentTestimonial].content}"
              </p>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FiChevronLeft className="text-gray-700 text-xl" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <FiChevronRight className="text-gray-700 text-xl" />
            </button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Let's discuss how Digitaly can help you achieve your digital goals and drive business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                            Get a Free Consultation
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all font-medium">
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Digitaly;