import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Team from "./components/Team";
import Contact from "./components/Contact";



function App() {
  const [page, setPage] = useState("home");

  // States shared with Home component
  const [file, setFile] = useState(null);
  const [wasteDetected, setWasteDetected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && (
        <Home
          file={file} setFile={setFile}
          wasteDetected={wasteDetected} setWasteDetected={setWasteDetected}
          loading={loading} setLoading={setLoading}
          error={error} setError={setError}
        />
      )}
      {page === "features" && <Features />}
      {page === "team" && <Team />}
      {page === "ContactUs" && <Contact  />}
    </div>
  );
}

export default App;
