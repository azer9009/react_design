import React from "react";


const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="benefit-card">
      <img src={icon} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default BenefitCard;
