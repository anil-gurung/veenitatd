import { Link } from 'react-router-dom';
import logo from '../assets/taradevilogo.jfif';
import { IoIosMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsMessenger } from 'react-icons/bs';

const footer = () => {
  return (
    <footer className="footer_bg">
      <div className="container footer_container">
        <article>
          <Link to="/" className="logo">
            <img src={logo} alt="footer logo" />
          </Link>
          <div className="footer_socials">
            <a
              href="mailto:taradevisuppliers@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoIosMail />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61568639694080"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+9779815153565"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiWhatsappFill />
            </a>
          </div>
        </article>
        <article>
          <h4>Contact Address</h4>
          <p>ADDRESS : Shuklagandaki-5, Dulegaunda, Tanahun</p>
          <p>MOBILE No. : 9846109653</p>
          <p>EMAIL : taradevisuppliers@gmail.com</p>
        </article>

        <article>
          <h4>Products</h4>
          <Link to="/products" className="abc">
            Dastaan
          </Link>
          <Link to="/products" className="abc">
            Royal
          </Link>
          <Link to="/products" className="abc">
            Faizaan
          </Link>
          <Link to="/products" className="abc">
            Khaas
          </Link>
          <Link to="/products" className="abc">
            Supreme
          </Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/about" className="abc">
            About Us
          </Link>
          <Link to="/contact" className="abc">
            Contact Us
          </Link>
        </article>
      </div>
      <div className="footer_copyright">
        <p>
          Copyright &copy;2024, Developed by Anil Gurung. All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default footer;
