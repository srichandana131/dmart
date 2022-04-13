import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Header = (propos) => {

  return (
      <div>
<nav class="navbar navbar-expand-lg navbar-light " id="bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src='https://findvectorlogo.com/wp-content/uploads/2018/12/dmart-vector-logo.png' className='logo-img' /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"> <Link to="/about">ABOUT US</Link> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"> <Link to="/catagories">CATEGORIES </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"> <Link to="/dmart">SOCIAL OUTREACH</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><Link to ="/partner">PARTNER WITH US</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#"><Link to ="/careers">CAREERS</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">FEED BACK</a>
              </li>
              <li class="nav-item">
                <a href="#" class="fa fa-facebook" id="iconsize"></a>
              </li>
              <li class="nav-item">
                <a href="#" class="fa fa-linkedin" id="iconsize"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    

</div>
)
}
export default Header;