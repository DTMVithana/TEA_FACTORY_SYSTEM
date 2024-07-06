import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditOrderModal = ({ order, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    orderID: "",
    customerNIC: "",
    date: "",
    deliveryaddress: "",
    additionalcharges: "",
    finalprice: "",
    orderstatus: "",
    customerID: "",
    ordertype: "",
  });
  const [isEditing, setIsEditing] = useState(false);

 
  useEffect(() => {
    if (order) {
      setFormData({
        orderID: order.orderID || "",
        customerNIC: order.customerNIC || "",
        date: order. date || "",
        deliveryaddress: order.deliveryaddress || "",
        additionalcharges: order.additionalcharges || "",
        finalprice: order.finalprice || "",
        orderstatus: order.orderstatus || "",
        customerID: order.customerID || "",
        ordertype: order.ordertype || "",
      });
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal overflow-y-auto h-[48rem]">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h2 className="text-lg font-bold mb-4">Edit Order</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            orderID:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="orderID"
              value={formData.orderID}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            customerNIC:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="customerNIC"
              value={formData.customerNIC}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            deliveryaddress:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="deliveryaddress"
              value={formData.deliveryaddress}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            additionalcharges:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="additionalcharges"
              value={formData.additionalcharges}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            finalprice:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="finalprice"
              value={formData.finalprice}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            orderstatus:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="orderstatus"
              value={formData.orderstatus}
              onChange={handleChange}
              disabled={!isEditing} 
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Declined">Declined</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            customerID:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="customerID"
              value={formData.customerID}
              onChange={handleChange}
              disabled={!isEditing} 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
            ordertype:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="ordertype"
              value={formData.ordertype}
              onChange={handleChange}
              disabled={!isEditing} 
            >
              <option value="Custom order">Custom</option>
              <option value="Signature order">Signature</option>
              <option value="Premium order">Premium</option>
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

export default EditOrderModal;
