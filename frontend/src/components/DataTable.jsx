import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import "./DataTable.css";
import Filter from "./Filter";

const DataTable = () => {
  const [data, setData] = useState(null); 
  const [filteredData, setFilteredData] = useState(null);
  const [selectedType, setSelectedType] = useState("csv");

  useEffect(() => {
    fetchData().then((result) => {
      setData(result);
      setFilteredData(result); 
    });
  }, []);


  const filterHandler = (keyword) => {
    if (!data || !data[selectedType]) return;
    

    if (keyword.trim() === "") {
      setFilteredData(data);
      return;
    }

    const filtered = data[selectedType].filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredData({ ...filteredData, [selectedType]: filtered });
  };

  if (!filteredData) return <div>Loading...</div>;

  const renderContent = () => {
    if (
      selectedType === "csv" ||
      (selectedType === "json" && Array.isArray(filteredData[selectedType]))
    ) {
      return (
        <div className="display">
          <div className="select">
            <label htmlFor="dataType">Please choose a file type: </label>
            <select
              id="dataType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="pptx">PPTX</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          <table border="1" cellPadding="5">
            <thead>
              <tr>
                {filteredData[selectedType].length > 0 &&
                  Object.keys(filteredData[selectedType][0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {filteredData[selectedType].map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((val, index) => (
                    <td key={index}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="display">
          <div className="select">
            <label htmlFor="dataType">Please choose a file type: </label>
            <select
              id="dataType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="pptx">PPTX</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <div style={{ whiteSpace: "pre-wrap" }}>
            {typeof filteredData[selectedType] === "object"
              ? JSON.stringify(filteredData[selectedType], null, 2)
              : filteredData[selectedType]}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="DataTable">
      <div className="filterWrapper">
        <Filter onFilter={filterHandler} />
      </div>
      <div className="outer">
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default DataTable;
