import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditCategoryModal from "./EditCategoryModal";
import DeleteConfModal from "./PDeleteConfModal";
import { useNavigate } from "react-router-dom";
import CategoryListPDF from "./CategoryListPDF";
import Layout from "../pages/PLayout";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/categories/getCg/"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedCategory(null);
    setIsEditModalOpen(false);
  };

  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/categories/putCg/${selectedCategory._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/categories/getCg/"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error editing category:", error);
    }
  };

  const handleDelete = async (categoryId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/categories/delCg/${categoryId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/categories/getCg/"
      );
      setCategories(response.data);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.categoryNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Category List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-Pro")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Category
          </button>
        </div>
        <input
          type="text"
          placeholder="Search by categoryNo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        />

        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Category No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Ingredients</th>
              <th className="px-4 py-2">Basic cost</th>
              <th className="px-4 py-2">Marketing Price</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category._id}>
                <td className="px-4 py-2">{category.categoryNo}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.ingredients}</td>
                <td className="px-4 py-2">{category.Bcost}</td>
                <td className="px-4 py-2">{category.Mprice}</td>
                <td className="px-4 py-2">{category.crating}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
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
          document={<CategoryListPDF categories={categories} />}
          fileName="category_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditCategoryModal
          category={selectedCategory}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedCategory._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default CategoryList;
