//import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSSFiles/NavBar.css"; 
const Nav = () => {
  return (
    <div>
      <nav class="navbar fixed-top bg-dark" id="navBar">
    
         

        <div id="p-div">

          {/* Home btn */}
          <Link to="/">
            <div class="container">
              <div class="row">
                <div class="col-sm-3">
                  <a class="btn btn-lg" href="#">
                    <span className="text">Home</span>
                  </a>
                </div>
              </div>
            </div>
          </Link>
          {/* Contact us Button */}
           
           <Link to='/contact'>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <a class="btn btn-lg" href="#">
                  <span className="text">Contact</span>
                </a>
              </div>
            </div>
          </div>
          </Link>
          {/* About */}

          <Link to='/about'>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <a class="btn btn-lg" href="#">
                  <span className="text">About</span>
                </a>
              </div>
            </div>
          </div>
          </Link>
          <Link to="/admin">
            <div class="container">
              <div class="row">
                <div class="col-sm-3">
                  <a class="btn btn-lg" href="#">
                    <span className="text">Administration</span>
                  </a>
                </div>
              </div>
            </div>
          </Link>

          {/* Signin Button */}
          <Link to="/signIn">
            <div class="container" id="signBtn">
              <div class="row">
                <div class="col-sm-3">
                  <a class="btn btn-lg" href="#">
                    <span className="text">Login</span>
                  </a>
                </div>
              </div>
            </div>
          </Link>

         



          {/* parent div */}
        </div>
      </nav>
    </div> //return div
  );
};

export default Nav;
