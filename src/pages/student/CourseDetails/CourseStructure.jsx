import React from 'react'

export const CourseStructure = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-100 min-h-screen">
    <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold">Build Text to Image SaaS App in React JS</h1>
      <p className="text-gray-600 mt-2">
        Master MERN Stack by building a Full Stack AI Text to Image SaaS App using
        React.js, MongoDB, Node.js, Express.js, and Stripe Payment.
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Course Structure</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Project Introduction</li>
          <li>Project Setup and Configuration</li>
          <li>Tailwind Setup</li>
          <li>Frontend Project</li>
          <li>Backend Project</li>
          <li>Payment Integration</li>
          <li>Project Deployment</li>
        </ul>
      </div>
    </div>
    </div>
  )
}


