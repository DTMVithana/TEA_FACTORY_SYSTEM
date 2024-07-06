import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditOrderModal from "./EditOrderModal";
import DeleteConfModal from "./CDeleteConfModal";
import { useNavigate } from "react-router-dom";
import OrderListPDF from "./OrderListPDF";
import Layout from "../pages/CLayout";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/api/v1/orders/getord/"
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedOrder(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:8070/api/v1/orders/putord/${selectedOrder._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:8070/api/v1/orders/getord/"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error editing order:", error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(
        `http://localhost:8070/api/v1/orders/delord/${orderId}`
      );
      const response = await axios.get(
        "http://localhost:8070/api/v1/orders/getord/"
      );
      setOrders(response.data);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.customerNIC.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    
    <Layout>
      
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Order List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-ord")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Order
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by customerNIC"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer NIC</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Delivery Address</th>
              <th className="px-4 py-2">Additional Charges</th>
              <th className="px-4 py-2">Final Price</th>
              <th className="px-4 py-2">Order status</th>
              <th className="px-4 py-2">Customer ID</th>
              <th className="px-4 py-2">Order Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td className="px-4 py-2">{order.orderID}</td>
                <td className="px-4 py-2">{order.customerNIC}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.deliveryaddress}</td>
                <td className="px-4 py-2">{order.additionalcharges}</td>
                <td className="px-4 py-2">{order.finalprice}</td>
                <td className="px-4 py-2">{order.orderstatus}</td>
                <td className="px-4 py-2">{order.customerID}</td>
                <td className="px-4 py-2">{order.ordertype}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(order)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
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
          document={<OrderListPDF orders={orders} />}
          fileName="order_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditOrderModal
          order={selectedOrder}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedOrder._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
      
    </Layout>
    
    
    
  
  );
};

export default OrderList;
