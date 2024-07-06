const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();
app.use(cors());

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

//imports emp routes
const employeeRoutes = require("./routes/employeeRoutes");
app.use("/api/v1/employees", employeeRoutes);

//imports leave routes
const leaveRoutes = require("./routes/leaveRoutes");
app.use("/api/v1/leaves", leaveRoutes);

//imports Pro routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/v1/products", productRoutes);

//imports category routes
const categoryRoutes = require("./routes/categoryRoutes");
app.use("/api/v1/categories", categoryRoutes);

//imports vehicaldetails routes
const vehicleDetailRoutes = require("./routes/vehicleDetailRoutes");
app.use("/api/v1/vehicles", vehicleDetailRoutes);


//imports transport routes
const transportRoutes = require("./routes/transportRoutes");
app.use("/api/v1/transports", transportRoutes);

//imports cus routes
const customerRoutes = require("./routes/customerRoutes");
app.use("/api/v1/customers", customerRoutes);

//import order routes
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/v1/orders",orderRoutes);

//imports it routes
const itemRoutes = require("./routes/itemRoutes");
app.use("/api/v1/items", itemRoutes);

//imports transaction routes
const transactionRoutes = require("./routes/transactionRoutes");
app.use("/api/v1/transactions", transactionRoutes);
 
//imports salary routes
const salaryRoutes = require("./routes/salaryRoutes");
app.use("/api/v1/salaries", salaryRoutes);

//imports bill routes
const billRoutes = require("./routes/billRoutes");
app.use("/api/v1/bills", billRoutes);


//LOGIN ROUTES

const loginRouter = require("./routes/login.js");
app.use("/login",loginRouter);




// Listen on port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${port}`.bgCyan
      .white
  );
});
