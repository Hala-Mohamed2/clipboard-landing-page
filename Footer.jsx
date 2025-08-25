import './Footer.css';



const Footer = () => {
  return(
    <footer className='footer'>
      <img className='logo' src="./images/logo.svg" alt="" />
      <div className="link">
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
      </div>
      <div className="link">
        <a href="">Privacy Policy</a>
        <a href="">Press Kit</a>
      </div>
      <div className="link">
        <a href="">Install Guide</a>
      </div>
      <div className="social">
        <img src="./images/icon-facebook.svg" alt="" />
        <img src="./images/icon-twitter.svg" alt="" />
        <img src="./images/icon-instagram.svg" alt="" />
      </div>
    </footer>
  )
}


export default Footer;