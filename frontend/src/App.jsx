import React from "react";
import DataTable from "./components/DataTable";
import "./App.css";

const NavBar = ({ setActive }) => {
  return (
    <div className="navbar">
      <div className="menu">
        <ul className="menuItems">
          <li>
            <button onClick={() => setActive("displayData")}>
              displayData
            </button>
          </li>
          <span className="line"></span>
          <li>
            <h1>TOPO Technical Assessment</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  const [activeItem, setActiveItem] = React.useState("");

  return (
    <div className="App">
      <NavBar setActive={setActiveItem} />
      {activeItem !== "displayData" && (
        <p>
          Please click the display button in the upper right corner to view and
          filter the data.
        </p>
      )}
      {activeItem === "displayData" && <DataTable />}
    </div>
  );
}

export default App;
