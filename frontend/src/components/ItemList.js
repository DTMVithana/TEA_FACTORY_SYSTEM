import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EditItemModal from "./EditItemModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useNavigate } from "react-router-dom";
import ItemListPDF from "./ItemListPDF";
import Layout from "../pages/ILayout";

const ItemList = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/items/getIt/"
        );
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedItem(null);
    setIsEditModalOpen(false);
  };


  // filter option

const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
};
const filteredInventories = items.filter((item) =>
  item.status.toLowerCase().includes((searchQuery || '').toLowerCase()) &&
  (selectedCategory === '' || item.status === selectedCategory)
);

    // calculate number of items 

    const numOfMachinInv = () => {
      return items.filter(item => item.status=="machinaryInv").length;
  };
  const numOfProInv = () => {
    return items.filter(item => item.status=="productInv").length;
};
const numOfRawInv = () => {
  return items.filter(item => item.status=="rawMaterialInv").length;
};

//
  const handleSaveEditModal = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/items/putIt/${selectedItem._id}`,
        formData
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/items/getIt/"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error editing item:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/v1/items/delIt/${itemId}`
      );
      const response = await axios.get(
        "http://localhost:3000/api/v1/items/getIt/"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Item List</h2>
        <div className="container mx-auto flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold"></h2>
          <button
            onClick={() => navigate("/add-it")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Item
          </button>
        </div>

        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
        /> 

            <div className="mb-4 flex justify-center gap-7">

            <p className="text-center"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
            font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
            rounded-md group-hover:bg-opacity-0">Total product inventories : {numOfProInv()}</span></button></p>

            <p className="text-center"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
            font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
            rounded-md group-hover:bg-opacity-0">Total machinary item inventories : {numOfMachinInv()}</span></button></p>

           <p className="text-center"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm 
            font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 
            hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">

            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
            rounded-md group-hover:bg-opacity-0">Total Raw materials : {numOfRawInv()}</span></button></p>
            <p className="text-center"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 
            me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 
            group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none 
            focus:ring-blue-300 dark:focus:ring-blue-800">

            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md 
            group-hover:bg-opacity-0">Total Inventory Itmes: {items.length}</span></button></p>
            </div>

        <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="ml-2 p-2 border border-gray-300 rounded dark:text-slate-700"
                    >
                      <option value="">filter inventory item</option>
                        <option value="machinaryInv">machinary item inventory</option>
                        <option value="productInv">product item inventory</option>
                        <option value="rawMaterialInv">rawMaterial inventory</option>
                    </select>
                    
                    <table className="min-w-full">
    {filteredInventories.map((item) => (
        <tr key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
            
            <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.level}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2"/>
                
            </tr>
      
    ))}
</table>
      
       <br></br> <br></br> <br></br> <br></br>  
               

        <table className="min-w-full"> 
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Level</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.level}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(item);
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
          document={<ItemListPDF items={items} />}
          fileName="item_list.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
        <EditItemModal
          item={selectedItem}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveEditModal}
        />
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => {
            handleDelete(selectedItem._id);
            setIsDeleteModalOpen(false);
          }}
        />
      </div>
    </Layout>
  );
};

export default ItemList;

