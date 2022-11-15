import { Routes , Route } from "react-router-dom";
import About from "./Component/About";
import AdminPanel from "./Component/Admin";
import Book from "./Component/BookForm";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Nav from "./Component/NavBar";
import Rooms from "./Component/Rooms";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <div>
      
      
      <Nav/>
     <Routes>
    
     <Route path="/" element = {<Home/>}/>
     <Route path="/signIn" element = {<SignIn/>}/>
     <Route path="/booking" element ={<Book/>}/>
     <Route path="/admin" element ={<AdminPanel/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/about" element={<About/>}/>
     

     </Routes>
    

    </div>
  );
}

export default App;
