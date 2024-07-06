import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditBillModal from "./EditBillModal";
import DeleteConfModal from "./FDeleteConfModal";
import { useNavigate } from "react-router-dom";
import BillListPDF from "./BillListPDF";
import Layout from "../pages/FLayout";

const BillList = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/bills/getBp/"
        );
        setBills(response.data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      }
    };

    fetchBills();
  }, []);

  const handleEdit = (bill) => {
    setSelectedBill(bill);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedBill(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/bills/putBp/${selectedBill._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/bills/getBp/"
      );
      setBills(response.data);
    } catch (error) {
      console.error("Error editing bill:", error);
    }
  };

  const handleDelete = async (billId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/bills/delBp/${billId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/bills/getBp/"
      );
      setBills(response.data);
    } catch (error) {
      console.error("Error deleting bill:", error);
    }
  };

  const filteredBills = bills.filter((bill) =>
    bill.payId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Bill Payment List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-Sal")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Bill Payment
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by payId"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Payment ID</th>
              <th className="px-4 py-2">Bill No</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Section</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBills.map((bill) => (
              <tr key={bill._id}>
                <td className="px-4 py-2">{bill.payId}</td>
                <td className="px-4 py-2">{bill.billNo}</td>
                <td className="px-4 py-2">{bill.amount}</td>
                <td className="px-4 py-2">{bill.date}</td>
                <td className="px-4 py-2">{bill.section}</td>
                <td className="px-4 py-2">{bill.type}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(bill)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBill(bill);
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
          document={<BillListPDF bills={bills} />}
          fileName="bill_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditBillModal
          bill={selectedBill}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedBill._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default BillList;
