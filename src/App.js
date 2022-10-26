import { Routes , Route } from "react-router-dom";
import Home from "./Component/Home";
import Nav from "./Component/NavBar";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <div>
      
      
      <Nav/>
     <Routes>
    
     <Route path="/" element = {<Home/>}/>
     <Route path="/signIn" element = {<SignIn/>}/>

     </Routes>
    

    </div>
  );
}

export default App;
