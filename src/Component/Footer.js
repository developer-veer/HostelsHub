import '../CSSFiles/footer.css';
export const Footer = () => {
  return (
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li className='footer-links'>
                  <a href="#">Web design</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Development</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li className='footer-links'>
                  <a href="#">Company</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Team</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Legacy</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li className='footer-links'>
                  <a href="#">Job openings</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Employee success</a>
                </li>
                <li className='footer-links'>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <p class="copyright">Company Name © 2018</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
