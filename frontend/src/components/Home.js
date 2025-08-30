import React, { useState, useEffect } from "react";

function Home({ file, setFile, wasteDetected, setWasteDetected, loading, setLoading, error, setError }) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    "🌱 The Earth is what we all have in common.",
    "♻️ Reduce, Reuse, Recycle - save our planet!",
    "🌍 Small acts, when multiplied, can change the world.",
    "🌿 Waste isn't waste until we waste it.",
    "🍃 Nature does not hurry, yet everything is accomplished."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setWasteDetected([]);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError(null);
    setWasteDetected([]);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Prediction failed.");
      }

      setWasteDetected(data.waste_detected);
    } catch (err) {
      setError(`Prediction failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">🌿 Smart Waste Sorter</h1>
        <p className="home-quote">{quotes[quoteIndex]}</p>

        <div className="upload-card">
          <h2>     Upload Waste Image       </h2>
          <input type="file" onChange={handleFileChange} accept="image/*" className="file-input" />
          <button onClick={handleAnalyze} disabled={loading} className="upload-btn">
            {loading ? "Analyzing..." : "Analyze Waste"}
          </button>
        </div>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {wasteDetected.length > 0 && (
          <div className="results-container">
            <h2>🗑️ Detected Waste:</h2>
            {wasteDetected.map((item, index) => (
              <div key={index} className="waste-item">
                <h3>Type: {item.type}</h3>
                <p><strong>Decomposition Time:</strong> {item.decomposition}</p>
                <p><strong>Tips:</strong> {item.tip}</p>
                <p><strong>Disposal:</strong> {item.disposal}</p>
                <p><strong>Environmental Impact:</strong> {item.impact}75-85%% harmful</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
