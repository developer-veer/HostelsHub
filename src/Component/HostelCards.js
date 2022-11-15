import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSSFiles/cards.css";
import '../CSSFiles/FlipCards.css';
const HostelCards = () => {

  const navigate = useNavigate();
   const[hostel , setHostel] = useState([
         
          {Name : "GB Boys Hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/Aprt.jpg"} ,
          {Name : "Ali boys hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/hotel.jpg"},
          {Name : "Milnium girls hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/Motel.jpg"},
          {Name : "GB Boys Hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/Motel.jpg"},
          {Name : "GB Boys Hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/Motel.jpg"},
          {Name : "GB Boys Hostel" , AvailRoom :12 , seat_1_price  :7000 , seat_2_price  :14000 , seat_3_price  :21000 , img :"./img/Motel.jpg"}
          
   ]);


  return (
    //Parent Division
    <div id="card-container">

      {/* first card */}
      {

        hostel.map((hos) => (
      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src={hos.img}
                alt="Brohm Lake"
              />
              <figcaption>{hos.Name}</figcaption>
            </figure>

            <ul>
              <li>One Seater Price : {hos.seat_1_price}</li>
              <li>two Seater Price: {hos.seat_2_price}</li>
              <li>three Seater Price : {hos.seat_3_price}</li>
              
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src={hos.img}
                alt="Brohm Lake"
              />
            </figure>

            <button onClick={()=> navigate('/booking')}>Book</button>

            <div class="design-container">
              <span class="design design--1">hey</span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      
      
    </div>

  
   
  );
};

export default HostelCards;
