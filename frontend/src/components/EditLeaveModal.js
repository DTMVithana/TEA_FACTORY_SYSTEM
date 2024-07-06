import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditLeaveModal = ({ employee, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    leaveNo: "",
    leaveStatus: "",
    description: "",
    noOfDates: "",
    memberName: "",
    category: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Set initial form data when the leave prop changes
  // Set initial form data when the employee prop changes
  useEffect(() => {
    if (employee) {
      setFormData({
        leaveNo: employee.leaveNo || "",
        leaveStatus: employee.leaveStatus || "",
        description: employee.description || "",
        noOfDates: employee.noOfDates || "",
        memberName: employee.memberName || "",
        category: employee.category || "",
      });
    }
  }, [employee]);

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
        <h2 className="text-lg font-bold mb-4">Edit Leave</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LeaveNo:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="leaveNo"
              value={formData.leaveNo}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LeaveStatus:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="leaveStatus"
              value={formData.leaveStatus}
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
              No of Dates:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="noOfDates"
              value={formData.noOfDates}
              onChange={handleChange}
              disabled={!isEditing} // Disable input if not editing
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Member name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="memberName"
              value={formData.memberName}
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
              <option value="Sick Leave">Male</option>
              <option value="Casual Leave">Female</option>
              <option value="Annual Leave">Other</option>
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

export default EditLeaveModal;
