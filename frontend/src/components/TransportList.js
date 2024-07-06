import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditTransportModal from "./EditTransportModal";
import DeleteConfModal from "./TrDeleteConfModal";
import { useNavigate } from "react-router-dom";
import TransportListPDF from "./TransportListPDF";
import Layout from "../pages/TrLayout";

const TransportList = () => {
  const [transports, setTransports] = useState([]);
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransports = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/transports/getTr/"
        );
        setTransports(response.data);
      } catch (error) {
        console.error("Error fetching transport details:", error);
      }
    };

    fetchTransports();
  }, []);

  const handleEdit = (transport) => {
    setSelectedTransport(transport);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedTransport(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/transports/putTr/${selectedTransport._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/transports/getTr/"
      );
      setTransports(response.data);
    } catch (error) {
      console.error("Error editing transpot details:", error);
    }
  };

  const handleDelete = async (transportId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/transports/delTr/${transportId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/transports/getTr/"
      );
      setTransports(response.data);
    } catch (error) {
      console.error("Error deleting transport details:", error);
    }
  };



  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Transport Details List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-Trans")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Transport Details
          </button>
        </div>
       

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Transport ID</th>
              <th className="px-4 py-2">Vehicle Registration No</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Driver Name</th>
              <th className="px-4 py-2">Discription</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transports.map((transport) => (
              <tr key={transport._id}>
                <td className="px-4 py-2">{transport.TransportId}</td>
                <td className="px-4 py-2">{transport.vehicleRegNo}</td>
                <td className="px-4 py-2">{transport.date}</td>
                <td className="px-4 py-2">{transport.driverName}</td>
                <td className="px-4 py-2">{transport.discription}</td>
                <td className="px-4 py-2">{transport.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(transport)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTransport(transport);
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
          document={<TransportListPDF transports={transports} />}
          fileName="transport_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditTransportModal
          transport={selectedTransport}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedTransport._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default TransportList;
