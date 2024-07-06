import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditLeaveModal from "./EditLeaveModal";
import DeleteConfModal from "./DeleteConfModal";
import { useNavigate } from "react-router-dom";
import LeaveListPDF from "./LeaveListPDF";
import Layout from "../pages/Layout";

const LeaveList = () => {
  const [leaves, setLeaves] = useState([]);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/leaves/getLv/"
        );
        setLeaves(response.data);
      } catch (error) {
        console.error("Error fetching leaves:", error);
      }
    };

    fetchLeaves();
  }, []);

  const handleEdit = (leave) => {
    setSelectedLeave(leave);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedLeave(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/leaves/putLv/${selectedLeave._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/leaves/getLv/"
      );
      setLeaves(response.data);
    } catch (error) {
      console.error("Error editing leave:", error);
    }
  };

  const handleDelete = async (leaveId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/leaves/delLv/${leaveId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/leaves/getLv/"
      );
      setLeaves(response.data);
    } catch (error) {
      console.error("Error deleting leave:", error);
    }
  };

  const filteredLeaves = leaves.filter((leave) =>
    leave.leaveNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Leave List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-emp")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Leave
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by leaveNo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">LeaveNo</th>
              <th className="px-4 py-2">LeaveStatus</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">No of Dates</th>
              <th className="px-4 py-2">Member name</th>
              <th className="px-4 py-2">category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.map((leave) => (
              <tr key={leave._id}>
                <td className="px-4 py-2">{leave.leaveNo}</td>
                <td className="px-4 py-2">{leave.leaveStatus}</td>
                <td className="px-4 py-2">{leave.description}</td>
                <td className="px-4 py-2">{leave.noOfDates}</td>
                <td className="px-4 py-2">{leave.memberName}</td>
                <td className="px-4 py-2">{leave.category}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(leave)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedLeave(leave);
                      setIsDeleteModalOpen(true);
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PDFDownloadLink
          document={<LeaveListPDF leaves={leaves} />}
          fileName="leave_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditLeaveModal
          leave={selectedLeave}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedLeave._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default LeaveList;
