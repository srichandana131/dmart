import React from 'react';
import image from '../../1.png';
import image2 from '../../2.jpg';
import image3 from '../../3.jpg';
import image4 from '../../4.jpg';
import image5 from '../../5.jpg';
import './home.css';


const Home = (props)=>{
    return(
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    
    <img src={image} alt="Lights" style={{width:"5%"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto"> 
        <li class="nav-item">
          <a class="nav-link " id="nav1" aria-current="page" href="#" data-toggle="modal" data-target="#exampleModal">Hallo<br/>select yr adress</a>

        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav1" href="#">Link</a>

        </li>
      
      </ul>
      <form class="d-flex search-box">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
    </div>
  </div>
</nav> 
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    
    <img src={image} alt="Lights" style={{width:"5%"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto"> 
        <li class="nav-item">
          <a class="nav-link " id="nav1" aria-current="page" href="#" data-toggle="modal" data-target="#exampleModal">Hallo<br/>select yr adress</a>

        </li>

        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>

        <li class="nav-item">
          <a class="nav-link" id="nav1" href="#">Link</a>

        </li>
      
      </ul>
      <form class="d-flex search-box">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              </form>
    </div>
  </div>
</nav> 



<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<div id="demo" class="carousel slide" data-bs-ride="carousel">

 
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"style={{color:"red"}}></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      
    </div>
    
  
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={image2} alt="Lights" style={{width:"100%"}}></img>
             </div>
      <div class="carousel-item">
      <img src={image3} alt="Lights" style={{width:"100%"}}></img>
      </div>
      <div class="carousel-item">
      <img src={image4} alt="Lights" style={{width:"100%"}}></img>
      </div>
      <div class="carousel-item">
      <img src={image5} alt="Lights" style={{width:"100%"}}></img>
      </div>
     
    </div>
    
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
        </div>

        
         
    )
}

export default Home;