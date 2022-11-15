
//import Nav from "./NavBar";
import HostelCards from "./HostelCards";
import '../CSSFiles/BlackCard.css';
import Search from "./Search";
import { Footer } from "./Footer";

const Home = ()=>
{
    return (
        //return div
        <div>
    
       <Search/>
       <HostelCards/>
      
       <Footer/>
    

        </div>
        //return div
    );
}

export default Home;