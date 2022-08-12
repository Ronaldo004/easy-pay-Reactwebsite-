import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/header/Header";
import Work from "./Components/work/Work";
import Aboutus from "./Components/Aboutus/Aboutus";
import Howtoinstall from "./Components/howtoinstall/Howtoinstall";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
function Home() {
  let [user,setUser]=useState(null);
  return (
    <div className="App">
      < Navbar user={user} setUser={setUser}/>
      <Header />
      <Work />
      <Aboutus />
      <Howtoinstall />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
