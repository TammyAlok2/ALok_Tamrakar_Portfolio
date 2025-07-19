import React from "react";
import PortfolioOne from "./Pages/Hero";
import NotionDeveloper from "./Pages/Dashboard";
import { Route, BrowserRouter, Routes } from "react-router";

const App = () => {
  return (
    <div>
 
        <Routes>
          <Route path="/" element={<PortfolioOne />} />
          <Route path="/more" element={<NotionDeveloper />} />
        </Routes>
   

  
    </div>
  );
};

export default App;
