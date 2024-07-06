/*
import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (

      <div class="component-body">
        <div class="row">
          <div class="col"> <a href="/add-emp">
            <button type="button" class=" dbutton" id="btn-dash">
              <i class="fa fb fa-group" id="fa fa-2x"></i>
              <span class="lead align-top ">Employee Management</span>
            </button>
          </a>     </div>
          <div class="col"><a href="/AllT">
            <button type="button" class="dbutton" id="btn-dash">

              <i class="fa fb fa-truck mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Transport Management</span>

            </button>
          </a>   </div>
          <div class="col"><a href="/ViewFinancial">
            <button type="button" class="dbutton" id="btn-dash">
              <i class="fa fb fa-money mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Financial Management</span>
            </button>
          </a>   </div>
          <div class="w-100"></div>
          <div class="col"><Link to="/allCustomer">
            <button type="button" class=" dbutton" id="btn-dash">
              <i class="fa fb fa-shopping-cart pr-5"></i>
              <span class="lead align-top ">Order Management</span>
            </button>
          </Link></div>
          <div class="col"><Link to="/allview">
            <button type="button" class="dbutton" id="btn-dash">
              <i class="fa fb fa-percent mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Promotion Management</span>
            </button>
          </Link>  </div>
          <div class="col"><Link to="/alltenders">
            <button type="button" class="dbutton" id="btn-dash">
              <i class="fa fb fa-cubes mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Supply Management</span>
            </button></Link> </div>
          <div class="w-100"></div>
          <div class="col"><Link to="/inventories">
            <button type="button" class="dbutton" id="btn-dash">
              <i class="fa fb fa-line-chart mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Inventory Management</span>
            </button>
          </Link> </div>
          <div class="col"><a href="/add-Pro">
            <button type="button" class=" dbutton" id="btn-dash">
              <i class="fa fb fa-tasks mr-4" id="fa fa-2x"></i>
              <span class="lead align-top">Production Management</span>
            </button>
          </a> </div>
          <div class="col"><a href="/">
            <button type="button" class=" dbutton" id="btn-dash">
              <i class="fa fb fa-sign-out mr-4"></i>
              <span class="lead align-top">Exit</span>
            </button>
          </a> </div>
        </div>
        </div>





  );
}

export default Dashboard;
*/

import React from "react";
import { Link } from "react-router-dom";
import "../styles/LLayoutStyles.css";

function Dashboard(props) {
  return (      
    <div className="dash">
    <div className="h-screen p-4">
    <h1 className="text-6xl color-white text-center text-white font-semibold mb-4">
        Batuwangala Tea Factory
    </h1>
      <div className="grid grid-cols-3 gap-4 flex items-center justify-center">
        <Link to="/home" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Employee Management</h2>
        </div>
        </Link>
        <Link to="/Trhome" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Transport Management</h2>
        </div>
        </Link>
        <Link to="/Fhome" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Finance Management</h2>
        </div>
        </Link>
        <Link to="/Chome" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Order Management</h2>
        </div>
        </Link>
        <Link to="/allview" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Promotion Management</h2>
        </div>
        </Link>
        <Link to="/alltenders" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Supplier Management</h2>
        </div>
        </Link>
        <Link to="/Ihome" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Inventory Management</h2>
        </div>
        </Link>
        <Link to="/Phome" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Production Management</h2>
        </div>
        </Link>
        <Link to="/login" className="col-span-1">
        <div className="bg-green-300 rounded-lg shadow-md p-5">
          <h2 className="text-3xl font-semibold mb-4">Exit</h2>
        </div>
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;