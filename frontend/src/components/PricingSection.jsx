import React from "react";
import "../index.css";

const plans = [
  {
    name: "1 Month Plan",
    price: "₹600",
    duration: "1 Month",
    features: ["Gym Access", "1 Trainer Session"],
    highlight: false,
  },
  {
    name: "3 Month Plan",
    price: "₹1500",
    duration: "3 Months",
    features: [
      "Gym Access",
      "Diet Consultation",
      "2 Trainer Sessions",
    ],
    highlight: false,
  },
  {
    name: "6 Month Plan",
    price: "₹2500",
    duration: "6 Months",
    features: [
      "Unlimited Gym Access",
      "Diet Consultation",
      "Monthly Progress Report",
    ],
    highlight: true,
  },
  {
    name: "1 Year Plan",
    price: "₹4500",
    duration: "12 Months",
    features: [
      "Unlimited Access",
      "Diet & Fitness Guidance",
      "Monthly Progress Reports",
      "Personal Trainer Sessions",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2 className="section-title">Membership Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            {plan.highlight && <div className="badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="join-btn">Join Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
