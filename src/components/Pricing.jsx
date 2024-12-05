import React from 'react'
import PricingTag from './PricingTag';



const Pricing = () => {
  return (
    <div className="py-12 px-4 text-center bg-gray-50">
      <PricingTag/>
      <div className="mt-8 md:flex md:justify-center md:space-x-6 lg:space-x-10">
        <div className="block md:hidden overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-block w-full px-4">
            <Card
              plan="Free"
              price="$0"
              description="Capture ideas and find them quickly"
              features={[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
              ]}
              buttonLabel="Get Started"
            />
          </div>
          <div className="inline-block w-full px-4">
            <Card
              plan="Personal"
              price="$11.99"
              description="Keep home and family on track"
              features={[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
                "Add due dates, reminders, and notifications to your tasks",
              ]}
              buttonLabel="Get Started"
              isHighlight
            />
          </div>
          <div className="inline-block w-full px-4">
            <Card
              plan="Organization"
              price="$49.99"
              description="Capture ideas and find them quickly"
              features={[
                "Sync unlimited devices",
                "10 GB monthly uploads",
                "200 MB max. note size",
                "Customize Home dashboard and access extra widgets",
              ]}
              buttonLabel="Get Started"
            />
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-10">
          <Card
            plan="Free"
            price="$0"
            description="Capture ideas and find them quickly"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
            ]}
            buttonLabel="Get Started"
          />
          <Card
            plan="Personal"
            price="$11.99"
            description="Keep home and family on track"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
              "Add due dates, reminders, and notifications to your tasks",
            ]}
            buttonLabel="Get Started"
            isHighlight
          />
          <Card
            plan="Organization"
            price="$49.99"
            description="Capture ideas and find them quickly"
            features={[
              "Sync unlimited devices",
              "10 GB monthly uploads",
              "200 MB max. note size",
              "Customize Home dashboard and access extra widgets",
            ]}
            buttonLabel="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ plan, price, description, features, buttonLabel, isHighlight }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        isHighlight ? "bg-blue-700 text-white" : "bg-white"
      }`}
    >
      <h3 className={`text-xl font-semibold ${isHighlight ? "text-white" : "text-gray-900"}`}>
        {plan}
      </h3>
      <p className={`text-2xl font-bold mt-4 ${isHighlight ? "text-white" : "text-gray-900"}`}>
        {price}
      </p>
      <p className={`mt-2 ${isHighlight ? "text-blue-100" : "text-gray-600"}`}>{description}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-4 h-4 inline-block bg-green-500 rounded-full"></span>
            <span className={`${isHighlight ? "text-blue-100" : "text-gray-700"}`}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 px-4 py-2 rounded-md ${
          isHighlight ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-100 hover:bg-gray-300 text-gray-700"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Pricing;