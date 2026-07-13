import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok
} from "react-icons/fa";

function Footer () {
    return (
      <footer className="footer">
        <h2>Navas</h2>

        <p>
            Full Stack Developer | Football Content Creator
        </p>

        <div className="footer-icons">
          <a
            href="https://www.github.com/Navas-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub/>
          </a>

         <a
           href="https://linkedin.com/in/navas-👽-89054320b"
           target="_blank"
            rel="noopener noreferrer"
         >
            <FaLinkedin/>
         </a>

         <a
           href="https://tiktok.com/@navas_football_news"
           target="_blank"
            rel="noopener noreferrer"
         >
            <FaTiktok/>
         </a>

        </div>

        <p className="copyright">
        © {new Date().getFullYear()} Navas. All rights reserved.
      </p>
      </footer>
    );
}

export default Footer;