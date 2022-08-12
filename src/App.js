import Home from "./Home";
import {Routes,Route,BrowserRouter  } from 'react-router-dom'
//import { AuthProvider } from "./Components/Context/AuthContext";

import About from "./Pages/About";
import Contacts from "./Pages/Contact";
import Service from "./Pages/Service";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
function App() {
  return (
    <>
<BrowserRouter>
     <Routes>
      <Route  exact path="/" element={<Home/>}></Route>
      <Route  path='/about' element={<About/> }></Route>
      <Route  path='/contact' element={<Contacts/>}></Route>
      <Route  path='/service' element={<Service/>}></Route>
     <Route  path='/signup' element={<Signup/>}></Route>

      <Route  path='/signin' element={<Signin/>}></Route>
      
      </Routes> 
      
</BrowserRouter>     
     
      </>
  );
}

export default App;
