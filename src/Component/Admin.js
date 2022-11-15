import "../CSSFiles/AdminPanel.css";
import { Link } from "react-router-dom";
const AdminPanel = () => {
  return (
    <div>
      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
          <img src="./public/img/Tanveer.jpg" />
          <h2>John D.</h2>
        </header>
        <ul>
          <li tabindex="0" class="icon-dashboard">
            <span>Dashboard</span>
          </li>
          <li tabindex="0" class="icon-customers">
            <span>Customers</span>
          </li>
          <li tabindex="0" class="icon-users">
            <span>Users</span>
          </li>
          <li tabindex="0" class="icon-settings">
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      <main>
        <div id="totalReg-div-btns">
          <div id="btn-div">
            <Link to="/VRS">
              <button id="btn">View Registered Student's</button>
            </Link>

            <Link to="/Login">
              <button id="btn">Registration at HostelHub</button>
            </Link>

            <Link to="/VRH">
              <button id="btn">View Registered Warden's</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
