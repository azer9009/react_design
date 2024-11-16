import React from "react";
import "../InfoCards/InfoCards.style.css";

const steps = [
  {
    number: "01",
    title: "Customer Inquiry",
    description:
      "Customers reach out through various channels like chat, email, social media, or voice.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI system quickly analyzes the inquiry using Natural Language Processing (NLP) to understand the context and intent.",
  },
  {
    number: "03",
    title: "Instant Response",
    description:
      "AI provides immediate, consistent, and personalized responses based on the customer's query, ensuring they get accurate information quickly.",
  },
  {
    number: "04",
    title: "Data Integration",
    description:
      "AI integrates with your CRM system, accessing relevant customer data to tailor responses and provide context-aware assistance.",
  },
  {
    number: "05",
    title: "Continuous Learning",
    description:
      "The AI system continuously learns from interactions and feedback, improving its accuracy and effectiveness over time to provide even better support.",
  },
  {
    number: "06",
    title: "Escalation to Human Agents",
    description:
      "For complex issues, AI seamlessly transfers the conversation to a human agent, providing them with all necessary context for a smooth transition.",
  },
];

const InfoCards = () => {
  return (
    <div className="cards-container">
      {steps.map((step, index) => (
        <div key={index} className="card">
          <h1 className="card-number">{step.number}</h1>
          <h2 className="card-title">{step.title}</h2>
          <p className="card-description">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
