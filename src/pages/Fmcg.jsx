import React from 'react'
import fmcg from '/fmcg.webp'

const Fmcg = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <img
        src={fmcg}
        alt="FMCG Distribution"
        className="w-full h-64 object-cover rounded-lg mb-6 shadow"
      />
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        FMCG Distribution
      </h1>
      <p className="mb-4 text-gray-700">
        We act as direct distributors for several reputed FMCG brands, servicing both rural and urban markets in and around Karaikudi. Our distribution model is designed to ensure timely supply, product availability, and efficient logistics.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Categories We Handle:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <span className="font-medium">Daily Groceries</span> – Rice, pulses, spices, edible oils.
        </li>
        <li>
          <span className="font-medium">Packaged Food and Snacks</span> – Biscuits, chips, instant foods.
        </li>
        <li>
          <span className="font-medium">Household and Cleaning Supplies</span> – Soaps, detergents, dish wash liquids.
        </li>
        <li>
          <span className="font-medium">Health and Wellness Items</span> – Sanitary products, herbal items, first-aid essentials.
        </li>
      </ul>
      <p className="text-gray-700">
        Our dedicated supply chain ensures that retail shops, wholesalers, and end customers receive consistent service and competitive pricing.
      </p>
    </div>
  )
}

export default Fmcg