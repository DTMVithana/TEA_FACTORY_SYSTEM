import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee"; // Import AddEmployee component
import LeaveList from "./components/LeaveList";
import AddLeave from "./components/AddLeave"; // Import AddLeave component
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct"; // Import AddProduct component
import CategoryList from "./components/CategoryList";
import AddCategory from "./components/AddCategory"; // Import AddCategory component
import PHomePage from "./pages/PHomePage";
import TransportList from "./components/TransportList";
import AddTransport from "./components/AddTransport"; // Import AddSalary component
import VehicledetailList from "./components/VehicledetailList";
import AddVehicledetail from "./components/AddVehicledetail"; // Import AddBill component
import TrHomePage from "./pages/TrHomePage";
import AddCustomer from "./components/AddCustomer"; // Import AddCustomer component
import OrderList from "./components/OrderList";
import AddOrder from "./components/AddOrder"; // Import AddOrder component
import CHomePage from "./pages/CHomePage";
import CustomerList from "./components/CustomerList";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem"; // Import AddItem component
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction"; // Import AddTransaction component
import IHomePage from "./pages/IHomePage";
import SalaryList from "./components/SalaryList";
import AddSalary from "./components/AddSalary"; // Import AddSalary component
import BillList from "./components/BillList";
import AddBill from "./components/AddBill"; // Import AddBill component
import FHomePage from "./pages/FHomePage";




function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/emp" element={<EmployeeList />} />
          <Route path="/add-emp" element={<AddEmployee />} />
          <Route path="/lv" element={<LeaveList />} />
          <Route path="/add-lv" element={<AddLeave />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="" element={<Login />} />
          <Route path="/Pro" element={<ProductList />} />
          <Route path="/add-Pro" element={<AddProduct />} />
          <Route path="/Cg" element={<CategoryList />} />
          <Route path="/add-Cg" element={<AddCategory />} />
          <Route path="/Phome" element={<PHomePage />} />
          <Route path="/Trans" element={<TransportList />} />
          <Route path="/add-Trans" element={<AddTransport />} />
          <Route path="/Vdt" element={<VehicledetailList />} />
          <Route path="/add-Vdt" element={<AddVehicledetail />} />
          <Route path="/Trhome" element={<TrHomePage />} />
          <Route path="/cus-ls" element={<CustomerList/>} />
          <Route path="/add-cus" element={<AddCustomer />} />
          <Route path="/ord-ls" element={<OrderList />} />
          <Route path="/add-ord" element={<AddOrder />} />
          <Route path="/Chome" element={<CHomePage />} />
          <Route path="/it" element={<ItemList />} />
          <Route path="/add-it" element={<AddItem />} />
          <Route path="/tr" element={<TransactionList />} />
          <Route path="/add-tr" element={<AddTransaction />} />
          <Route path="/Ihome" element={<IHomePage />} />
          <Route path="/Sal" element={<SalaryList />} />
          <Route path="/add-Sal" element={<AddSalary />} />
          <Route path="/Bp" element={<BillList />} />
          <Route path="/add-Bp" element={<AddBill />} />
          <Route path="/Fhome" element={<FHomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
