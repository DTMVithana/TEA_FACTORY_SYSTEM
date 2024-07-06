import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditTransactionModal from "./EditTransactionModal";
import DeleteConfModal from "./IDeleteConfModal";
import { useNavigate } from "react-router-dom";
import TransactionListPDF from "./TransactionListPDF";
import Layout from "../pages/ILayout";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/transactions/getTr/"
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching Transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  const handleEdit = (transaction) => {
    setSelectedTransaction(transaction);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedTransaction(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/transactions/putTr/${selectedTransaction._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/transactions/getTr/"
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error editing transaction:", error);
    }
  };

  const handleDelete = async (transactionId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/transactions/delTr/${transactionId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/transactions/getTr/"
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const filteredTransactions = transactions.filter((transaction) =>
  transaction.tno.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Transaction List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-tr")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Transaction
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by transactionNo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Tno</th>
              <th className="px-4 py-2">Sid</th>
              <th className="px-4 py-2">UnitPrice</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td className="px-4 py-2">{transaction.tno}</td>
                <td className="px-4 py-2">{transaction.sid}</td>
                <td className="px-4 py-2">{transaction.unitPrice}</td>
                <td className="px-4 py-2">{transaction.quantity}</td>
                <td className="px-4 py-2">{transaction.description}</td>
                <td className="px-4 py-2">{transaction.category}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedTransaction(transaction);
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
          document={<TransactionListPDF transactions={transactions} />}
          fileName="transaction_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditTransactionModal
          transaction={selectedTransaction}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedTransaction._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default TransactionList;

