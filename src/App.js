import React, { useState } from "react";
import UserDetails from "./components/UserDetails";
import AccountCreation from "./components/AccountCreation";

const App = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("userDetails");

  // Function to render content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "userDetails":
        return <UserDetails />;
      case "accountCreation":
        return <AccountCreation />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Tab selection buttons */}
      <div className="p-4 flex gap-7 font-mono border-b-4 w-full">
        <button
          onClick={() => setActiveTab("userDetails")}
          className={
            activeTab === "userDetails"
              ? "transition duration-300 ease-in border-b-4 border-red-400"
              : ""
          }
        >
          User Details
        </button>
        <button
          onClick={() => setActiveTab("accountCreation")}
          className={
            activeTab === "accountCreation"
              ? "transition duration-300 ease-in border-b-4 border-red-400"
              : ""
          }
        >
          Account Creation
        </button>
      </div>

      {/* Render content based on the active tab */}
      {renderTabContent()}
    </div>
  );
};

export default App;
