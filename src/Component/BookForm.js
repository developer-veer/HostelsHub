import "../CSSFiles/Book.css";
const Book = () => {
  return (
    <div id="card-container-booking">
      <form id="B-form">
        <h3 style={{ marginLeft: 200, color: "black", fontFamily: "fantasy" }}>
          Make your Reservation
        </h3>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          id="username"
          className="input-book-dis-inline"
        />
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          className="input-book-dis-inline-1"
        />

        <input
          type="text"
          placeholder="Address"
          id="username"
          className="input-book"
        />
        <input
          type="text"
          data-inputmask="'mask': '99999-9999999-9'"
          placeholder="CNIC XXXXX-XXXXXXX-X"
          id="username"
          className="input-book"
        />

        <div className="radio-div">
          <input type="radio" name="select" id="option-1" checked />
          <input type="radio" name="select" id="option-2" />
          <label for="option-1" class="option option-1">
            <div className="dot"></div>
            <span style={{color:'black'}}>Student</span>
          </label>
          <label for="option-2" className="option option-2">
            <div className="dot"></div>
            <span style={{color:'black'}}>Employee</span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Book;
