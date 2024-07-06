import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditVehicledetailModal from "./EditVehicledetailModal";
import DeleteConfirmationModal from "./TrDeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import VehicledetailListPDF from "./VehicledetailListPDF";
import Layout from "../pages/TrLayout";

const VehicledetailList = () => {
  const [VEHICLED, setVehicledetail] = useState([]);
  const [selectedVehicledetail, setSelectedVehicledetail] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicledetail = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/vehicles/getVdt"
        );

        setVehicledetail(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicledetail();
  }, []);

  const handleEdit = (VEHICLED) => {
    setSelectedVehicledetail(VEHICLED);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedVehicledetail(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/vehicles/putVdt/${selectedVehicledetail._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/vehicles/getVdt/"
      );
      setVehicledetail(response.data);
    } catch (error) {
      console.error("Error editing vehicle:", error);
    }
  };

  const handleDelete = async (VehicledetailId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/vehicles/delVdt/${VehicledetailId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/vehicles/getVdt/"
      );
      setVehicledetail(response.data);
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  // search
  const filteredVehicledetail = VEHICLED.filter(
    (VEHICLED) =>
      VEHICLED.transportId?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Vehicle Detail List </h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-emp")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Vehicle
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by Transport id"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />    
        <div className="text-3xl font-semibold mb-4">
        <p>   Total Vehicles: {VEHICLED.length}</p>
        </div>       

        


        

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Transport ID</th>
              <th className="px-4 py-2">Vehicle Registration ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Vehicle Type</th>
              <th className="px-4 py-2">Vehicle Brand</th>
              <th className="px-4 py-2">Mileage</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicledetail.map((VEHICLED) => (
              <tr key={VEHICLED._id}>
                <td className="px-4 py-2">{VEHICLED.transportId}</td>
                <td className="px-4 py-2">{VEHICLED.vehicleRId}</td>
                <td className="px-4 py-2">{VEHICLED.date}</td>
                <td className="px-4 py-2">{VEHICLED.vehicleType}</td>
                <td className="px-4 py-2">{VEHICLED.vehicleBrand}</td>
                <td className="px-4 py-2">{VEHICLED.mileage}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(VEHICLED)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedVehicledetail(VEHICLED);
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
          document={<VehicledetailListPDF VEHICLED={VEHICLED} />}
          fileName="VEHICLED_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
        <EditVehicledetailModal
          VEHICLED={selectedVehicledetail}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedVehicledetail._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>


     



    </Layout>
  );
};

export default VehicledetailList;
