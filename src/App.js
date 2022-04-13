import Home from './components/home/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from './components/products';
import Example from './components/example';
import './App.css';
import Programs from './components/programs';
import Prime from './components/prime';
import Even from './components/even';
import Marks from './components/marks';
import Good from './components/good';
import Time from './components/time';
import Dmart from './components/dmart';
import About from './components/about';
import Header from './components/header';
function App() {


  return (
    <div className="App">

<BrowserRouter>
<Header></Header>
      <Routes>
        <Route path="/programs" element={<Programs/>} />
        <Route path="/dmart" element={<Dmart/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/catagories" element={<Even/>}/>
        <Route path="/partner"element={<Prime/>}/>
        <Route path="/careers" element={<Marks/>}/>
   
          </Routes>
          </BrowserRouter>
     {/* <Home/> 
     <Product name='chandu'/>
     <Example/> */}
     {/* <Programs/> */}
     {/* <Prime/> */}
     {/* <Even/> */}
     {/* <Marks/> */}
     {/* <Good/> */}
     {/* <Time/> */}
     {/* <Dmart/> */}
     {/* <About/> */}

    </div>
  );
}

export default App;
