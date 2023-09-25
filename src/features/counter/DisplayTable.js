import React, { useEffect, useState } from "react";

import { fetchWarehouseDataAsync } from "./productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

function DisplayTable() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const warehouseData = useSelector((state) => state.warehouse.warehouseData);
  const [selectedCode, setSelectedCode] = useState("");
  const [selectClucter, setselectClucter] = useState("");
  const [selectedSpaceAvailable, setSelectedSpaceAvailable] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchWarehouseDataAsync());
  }, [dispatch]);
  useEffect(() => {
    if (warehouseData) {
      console.log("Fetched Data:", warehouseData);
    }
  }, [warehouseData]);

  const filteredData = warehouseData.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const codeMatches = selectedCode === "" || item.city === selectedCode;
    const clusterMatches =
      selectClucter === "" || item.cluster === selectClucter;
    const spaceAvailableMatches =
      selectedSpaceAvailable === "" ||
      item.space_available === parseInt(selectedSpaceAvailable);
    return (
      nameMatches && codeMatches && clusterMatches && spaceAvailableMatches
    );
  });

  const uniqueCodes = [...new Set(warehouseData?.map((item) => item.city))];
  const uniqueCluster = [
    ...new Set(warehouseData?.map((item) => item.cluster)),
  ];
  const uniqueSpaceAvailableValues = [
    ...new Set(warehouseData?.map((item) => item.space_available)),
  ];

  return (
    <div id="main">
      <>
        <h1 style={{ padding: "20px" }}>Warehouse-Info</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "450px" }}
        />

        <select
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
          style={{ padding: "10px", width: "250px", marginLeft: "15px" }}
        >
          <option value="">All City</option>
          {uniqueCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <select
          value={selectClucter}
          onChange={(e) => setselectClucter(e.target.value)}
          style={{ padding: "10px", width: "250px", marginLeft: "15px" }}
        >
          <option value="">All Cluster</option>
          {uniqueCluster.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>

        <select
          value={selectedSpaceAvailable}
          onChange={(e) => setSelectedSpaceAvailable(e.target.value)}
          style={{ padding: "10px", width: "250px", marginLeft: "15px" }}
        >
          <option value="">All Space Available</option>
          {uniqueSpaceAvailableValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <br />
        <br />

        <table id="displayall">
          <thead>
            <tr>
              <th>Name </th>
              <th>Code</th>
              <th>Id</th>
              <th>City</th>
              <th>Space Available</th>
              <th>Type</th>
              <th>Cluster</th>
              <th>Registered</th>
              <th>Live</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.code}</td>
                <td>{item.id}</td>
                <td>{item.city}</td>
                <td>{item.space_available}</td>
                <td>{item.type}</td>
                <td>{item.cluster}</td>
                <td>{item.is_registered == false ? "false" : "true"}</td>
                <td>{item.is_live == false ? "false" : "true"}</td>

                <td>
                  <BiSolidMessageSquareEdit
                    onClick={() => navigate("/edit", { state: { data: item } })}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default DisplayTable;
