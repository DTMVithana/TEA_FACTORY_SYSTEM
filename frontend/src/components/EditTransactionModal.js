import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditTransactionModal = ({ item, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    
    sid: "",
    unitPrice: "",
    quantity: "",
    description: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Set initial form data when the transaction prop changes
  // Set initial form data when the item prop changes
  useEffect(() => {
    if (item) {
      setFormData({
        
        sid: item.sid || "",
        unitPrice: item.unitPrice || "",
        quantity: item.quantity || "",
        description: item.description || "",
        category: item.category || "",
      });
    }
  }, [item]);

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
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-4">Edit Transaction</h2>
        <form>

        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Sid:
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="sid"
              value={formData.sid}
              onChange={handleChange}
              // Disable input if not editing
            
            >
              <option value="">Select</option>
              <option value="S001">S001</option>
              <option value="S002">S002</option>
              <option value="S003">S003</option>
              <option value="S004">S004</option>
              <option value="S005">S005</option>
              <option value="S006">S006</option>
              <option value="S007">S007</option>
              <option value="S008">S008</option>
              <option value="S009">S009</option>
              <option value="S0010">S0010</option>
              disabled={!isEditing} 
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UnitPrice:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Quantity:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              category:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="category"
              value={formData.category}
              onChange={handleChange}
              disabled={!isEditing} // Disable select if not editing
            >
              <option value="sale">sale</option>
              <option value="scrap">scrap</option>
              <option value="assembly">assembly</option>
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

export default EditTransactionModal;

