import "../CSSFiles/cards.css";
import '../CSSFiles/FlipCards.css';
const HostelCards = () => {
  return (
    //Parent Division
    <div id="card-container">

      {/* first card */}
      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/gb.jpg"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/Hostel1.jpg"
                alt="Brohm Lake"
              />
            </figure>

            <button>Book</button>

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
      
      {/* Second Card */}
      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/gb.jpg"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/Hostel1.jpg"
                alt="Brohm Lake"
              />
            </figure>

            <button>Book</button>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div class="flip-card-container" >
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/gb.jpg"
                alt="Brohm Lake"
              />
              <figcaption>Brohm Lake</figcaption>
            </figure>

            <ul>
              <li>Detail 1</li>
              <li>Detail 2</li>
              <li>Detail 3</li>
              <li>Detail 4</li>
              <li>Detail 5</li>
            </ul>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img
                src="./img/Hostel1.jpg"
                alt="Brohm Lake"
              />
            </figure>

            <button>Book</button>
          </div>
        </div>
      </div>
    </div>

  
   
  );
};

export default HostelCards;
