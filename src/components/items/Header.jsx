import './Header.css';

import {Link} from "react-router-dom";

import Logout from "../authentication/Logout"

function Header() {
  
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark theme text-light">
      <h4 class="navbar-text-hcmut">StuInfo</h4>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className='button-logout'>
            <Logout/>
        </div>

      <div class="collapse navbar-collapse header" id="navbarTogglerDemo02">
        
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          
          <li class="nav-item active" id="infostudent-navigate">
            <Link to="/infostudent" class="nav-link"> <h6 class="navbar-text"> | InfoStudent</h6> </Link>
          </li>

          <li class="nav-item active" id="contact-navigate">
            <Link to="/contact" class="nav-link"> <h6 class="navbar-text"> | Contact</h6> </Link>
          </li>

        </ul>
        
        <form class="title-hcmut">
            <div class="logout-button-hcmut">
                
                <div className="hcmut-title">
                    <h6 class="navbar-text-hcmut"> Ho Chi Minh City University of Technology </h6>
                </div>
            </div>
            
        </form>
        
      </div>
      
    </nav>
   
    </div>
  );
}

export default Header;