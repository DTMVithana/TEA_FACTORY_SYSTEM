import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditCategoryModal = ({ category, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    categoryNo: "",
    name: "",
    ingredients: "",
    Bcost: "",
    Mprice: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Set initial form data when the category prop changes
  // Set initial form data when the product prop changes
  useEffect(() => {
    if (category) {
      setFormData({
        categoryNo: category.categoryNo || "",
        name: category.name || "",
        ingredients: category.ingredients || "",
        Bcost: category.Bcost || "",
        Mprice: category.Mprice|| "",
        rating: category.rating || "",
      });
    }
  }, [category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-400 rounded-lg shadow-xl">
        <h2 className="text-lg font-bold mb-4">Edit Category</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category No:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="categoryNo"
              value={formData.categoryNo}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            Ingredients:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Basic Cost:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Bcost"
              value={formData.Bcost}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Marketing Price:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="Mprice"
              value={formData.Mprice}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Rating:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              disabled={!isEditing} // Disable select if not editing
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
            {isEditing && (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSave}
              >
                Save
              </button>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditCategoryModal;
