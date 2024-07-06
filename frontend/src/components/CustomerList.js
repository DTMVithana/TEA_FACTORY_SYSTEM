import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditCustomerModal from "./EditCustomerModal";
import DeleteConfirmationModal from "./CDeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import CustomerListPDF from "./CustomerListPDF";
import Layout from "../pages/CLayout";

const CustomerList = () => {
//debugger;
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/api/v1/customers/getcus/"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    fetchCustomers();
  }, []);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedCustomer(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:8070/api/v1/customers/putcus/${selectedCustomer._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:8070/api/v1/customers/getcus/"
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error editing customer:", error);
    }
  };

  const handleDelete = async (customerId) => {
    try {
      await axios.delete(
        `http://localhost:8070/api/v1/customers/delcus/${customerId}`
      );
      const response = await axios.get(
        "http://localhost:8070/api/v1/customers/getcus/"
      );
      setCustomers(response.data);
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //const filteredCustomers  = [];
  

  return (
    <Layout>
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Customer List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-cus")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Customer
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">NIC</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Sales Assistant</th>
              <th className="px-4 py-2">Registration date</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer._id}>
                <td className="px-4 py-2">{customer.nic}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.phoneNumber}</td>
                <td className="px-4 py-2">{customer.address}</td>
                <td className="px-4 py-2">{customer.salesassistant}</td>
                <td className="px-4 py-2">{customer.registrationdate}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(customer)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCustomer(customer);
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
          document={<CustomerListPDF customers={customers} />}
          fileName="customer_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
    
        <EditCustomerModal
          customer={selectedCustomer}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedCustomer._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
      
    </Layout>
    
   
  );
};

export default CustomerList;
