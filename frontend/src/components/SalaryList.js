import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditSalaryModal from "./EditSalaryModal";
import DeleteConfirmationModal from "./FDeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import SalaryListPDF from "./SalaryListPDF";
import Layout from "../pages/FLayout";

const SalaryList = () => {
  const [salaries, setSalaries] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/salaries/getSal/"
        );
        setSalaries(response.data);
      } catch (error) {
        console.error("Error fetching salaries:", error);
      }
    };

    fetchSalaries();
  }, []);

  const handleEdit = (salary) => {
    setSelectedSalary(salary);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedSalary(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/salaries/putSal/${selectedSalary._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/salaries/getSal/"
      );
      setSalaries(response.data);
    } catch (error) {
      console.error("Error editing salary payment:", error);
    }
  };

  const handleDelete = async (salaryId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/salaries/delSal/${salaryId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/salaries/getSal/"
      );
      setSalaries(response.data);
    } catch (error) {
      console.error("Error deleting salary peyment:", error);
    }
  };

  const filteredSalaries = salaries.filter((salary) =>
    salary.PId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Salary Payment List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-Pro")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Salary Payment
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by PId"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Employee ID</th>
              <th className="px-4 py-2">Basic Salary</th>
              <th className="px-4 py-2">Full Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSalaries.map((salary) => (
              <tr key={salary._id}>
                <td className="px-4 py-2">{salary.PId}</td>
                <td className="px-4 py-2">{salary.EId}</td>
                <td className="px-4 py-2">{salary.Bsalary}</td>
                <td className="px-4 py-2">{salary.Famount}</td>
                <td className="px-4 py-2">{salary.date}</td>
                <td className="px-4 py-2">{salary.type}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(salary)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSalary(salary);
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
          document={<SalaryListPDF salaries={salaries} />}
          fileName="salary_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditSalaryModal
          salary={selectedSalary}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedSalary._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default SalaryList;
