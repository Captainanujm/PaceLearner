import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { dummyDashboardData } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';

const Dashboard = () => {
  const exchangeRates = {
    USD: 1,
    INR: 80,
    GBP: 0.78,
    EUR: 0.92,
    JPY: 130,
    AUD: 1.5,
    CAD: 1.3,
    CHF: 0.9,
  };

  const { currency } = useContext(AppContext);
  const calculatedPrice = dummyDashboardData.totalEarnings * exchangeRates[currency];

  const cardData = [
    {
      icon: assets.patients_icon,
      label: 'Enrolled Students',
      value: dummyDashboardData.enrolledStudentsData.length,
    },
    {
      icon: assets.appointments_icon,
      label: 'Total Courses',
      value: dummyDashboardData.totalCourses,
    },
    {
      icon: assets.earning_icon,
      label: 'Total Earnings',
      value: `${currency} ${calculatedPrice.toLocaleString()}`,
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <img src={card.icon} alt={card.label} className="w-12 h-12" />
          <div>
            <p className="text-gray-500 text-sm">{card.label}</p>
            <h1 className="text-2xl font-bold text-gray-800">{card.value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
