import "../CSSFiles/BlackCard.css";
const Search = () => {
  return (
    //Parent Div
    <div id="carousel-div">
      <div id="welcome-div">
        <h1 style={{ color: "black" }}>Welcome to HostelsHub</h1>
        <h3 style={{ color: "black" }}>Search and Book a Room on one Click </h3>
      </div>
      <div id="search-div">
        
        <div class="serContainer">
          <input type="text" placeholder="Search..." />
          <div class="search"></div>
        </div>
      
      </div>
    </div>
  );
};

export default Search;
