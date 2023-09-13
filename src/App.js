import React from "react";
import ReactDOM from "react-dom/client";
import Topheader from "./Components/Topheader/Topheader";

const App = () => {
  return (
    <div className="App">
      <Topheader />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
