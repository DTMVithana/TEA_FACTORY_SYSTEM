import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditProductModal from "./EdiProductModal";
import DeleteConfirmationModal from "./PDeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import ProductListPDF from "./ProductListPDF";
import Layout from "../pages/PLayout";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/products/getPro/"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedProduct(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/products/putPro/${selectedProduct._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/products/getPro/"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/products/delPro/${productId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/products/getPro/"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.batchNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Production Stock List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Total Batch No: {products.length}</h2>
          <button
            onClick={() => navigate("/add-Pro")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Production Stock
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by batchNo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Batch No</th>
              <th className="px-4 py-2">Category No</th>
              <th className="px-4 py-2">Manufactured Date</th>
              <th className="px-4 py-2">Expiration Date</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Quality</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="px-4 py-2">{product.batchNo}</td>
                <td className="px-4 py-2">{product.categoryNo}</td>
                <td className="px-4 py-2">{product.MDate}</td>
                <td className="px-4 py-2">{product.EDate}</td>
                <td className="px-4 py-2">{product.qty}</td>
                <td className="px-4 py-2">{product.quality}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
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
          document={<ProductListPDF products={products} />}
          fileName="product_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditProductModal
          product={selectedProduct}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedProduct._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default ProductList;
