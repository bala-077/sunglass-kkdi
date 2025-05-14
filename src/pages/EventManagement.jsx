import React from 'react'
import eventManagement from '/eventManagement.jpg'

const EventManagement = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <img
        src={eventManagement}
        alt="Event Management"
        className="w-full h-64 object-cover rounded-lg mb-6 shadow"
      />
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Event Management
      </h1>
      <p className="mb-4 text-gray-700">
        Our event management division operates with creativity, precision, and local expertise. Based in Karaikudi, we provide end-to-end event planning and execution services, making us a preferred partner for both social and corporate events.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Services Include:</h2>
      <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
        <li>
          <span className="font-medium">Corporate Events</span> – Seminars, team outings, product launches, annual days.
        </li>
        <li>
          <span className="font-medium">Cultural Programs and Receptions</span> – Stage shows, music concerts, local festivities.
        </li>
        <li>
          <span className="font-medium">Weddings and Private Functions</span> – Full-scale event management from decor to logistics.
        </li>
        <li>
          <span className="font-medium">Promotional Campaigns</span> – Roadshows, store openings, marketing activations.
        </li>
      </ul>
      <p className="text-gray-700">
        We offer a complete package from concept to execution, including AV setup, venue booking, branding, and hospitality.
      </p>
    </div>
  )
}

export default EventManagement