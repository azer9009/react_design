import React from "react";
import BenefitCard from "../components/BenefitCard/BenefitCard"; 
import '../components/BenefitCard/BenefitCard.style.css'

import schedule from '../img/schedule.svg'
import avail from '../img/availablity.svg'
import star from '../img/star.svg'

const Benefits = () => {
  const benefitsData = [
    {
      icon: schedule,
      title: "24/7 Availability",
      description: "Always ready to assist your customers, no matter the time.",
    },
    {
      icon: avail, 
      title: "Scalable Support",
      description:
        "Efficiently handle large volumes of inquiries without increasing staff.",
    },
    {
      icon: star,
      title: "Enhanced Customer Experience",
      description:
        "Provide quick, accurate, and personalized support to keep your customers satisfied.",
    },
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-heading">BENEFITS</h2>
      <div className="benefits-grid">
        {benefitsData.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
