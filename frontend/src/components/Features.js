import React from "react";

function Features() {
  const features = [
    {
      title: "AI-Powered Detection",
      description: "Upload an image and let AI identify the waste type instantly.",
      icon: "🤖",
    },
    {
      title: "Decomposition Info",
      description: "Know how long each material takes to decompose in nature.",
      icon: "⏳",
    },
    {
      title: "Eco-Friendly Tips",
      description: "Receive useful tips on recycling and waste disposal.",
      icon: "🌱",
    },
    {
      title: "Impact Awareness",
      description: "Understand the environmental impact of your waste choices.",
      icon: "🌍",
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">✨ Key Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
