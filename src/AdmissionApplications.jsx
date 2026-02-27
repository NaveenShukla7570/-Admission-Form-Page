import React, { useState } from "react";
import { FaSearch, FaEye, FaTrash } from "react-icons/fa";
import "./App.css";

const AdmissionApplications = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const data = [
    {
      regNo: "A101",
      candidateName: "Rahul Sharma",
      age: 22,
      phone: "9876543210",
      district: "Lucknow",
      status: "Pending",
      submittedDate: "20/04/2024",
    },
    {
      regNo: "B202",
      candidateName: "Anita Verma",
      age: 25,
      phone: "9865123456",
      district: "Kanpur",
      status: "Reviewed",
      submittedDate: "18/04/2024",
    },
    {
      regNo: "C303",
      candidateName: "Suresh Nair",
      age: 28,
      phone: "9754367890",
      district: "Delhi",
      status: "Approved",
      submittedDate: "15/04/2024",
    },
    {
      regNo: "D404",
      candidateName: "Meena Singh",
      age: 21,
      phone: "9845023471",
      district: "Mumbai",
      status: "Rejected",
      submittedDate: "N/A",
    },
    {
      regNo: "E505",
      candidateName: "Arjun Patel",
      age: 30,
      phone: "9123456789",
      district: "Mumbai",
      status: "Pending",
      submittedDate: "10/04/2024",
    },
  ];

  const filteredData = data.filter((item) => {
    const matchSearch =
      item.candidateName.toLowerCase().includes(search.toLowerCase()) ||
      item.regNo.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search) ||
      item.district.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status pending";
      case "Reviewed":
        return "status reviewed";
      case "Approved":
        return "status approved";
      case "Rejected":
        return "status rejected";
      default:
        return "status";
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Dashboard</li>
          <li>Forms</li>
          <li>Palliative Form</li>
          <li>Interview Form</li>
          <li className="active">Admission Form</li>
          <li>Reports</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="breadcrumb">
          <span className="link">Admission Form</span> &gt; View Applications
        </div>

        <h1>Admission Applications</h1>

        {/* Search + Filter */}
        <div className="top-bar">
          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search by name, reg no, phone, or district..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Reviewed</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Reg No</th>
              <th>Candidate Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>District</th>
              <th>Status</th>
              <th>Submitted Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.regNo}</td>
                <td>{item.candidateName}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>{item.district}</td>
                <td>
                  <span className={getStatusClass(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>{item.submittedDate}</td>
                <td className="actions">
                  <FaEye className="view" />
                  <FaTrash className="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionApplications;