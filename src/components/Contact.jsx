import "./Contact.css";
import { 
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaDownload 
} from "react-icons/fa6";

function Contact () {
    return (
      <section 
         className="contact" 
         id="contact"
         data-aos = "fade-left">
         <h2>Contact Me</h2>
         <div className="contact-container">
            <div className="contact-item">
              <FaEnvelope/>
              <a href="mailto:antyutdhabesha9@gmail.com">
                  antyutdhabesha9@gmail.com
              </a>            
            </div>

            <div className="contact-item">
               <FaPhone/>
               <span>+251 910716810</span>
            </div>

            <div className="contact-item">
              <FaGithub/>
              <a href="https://www.github.com/Navas-github"
                 target="_blank"
                 rel="noreferrer"
               >
                    Navas-github
                </a>
            </div>

            <div className="contact-item">
              <FaLinkedin/>
              <a 
                 href="https://www.linkedin.com/in/navas-👽-89054320b/"
                 target="_blank" 
                 rel="noreferrer"
              >
                linkedin</a>
            </div>

            <div className="contact-item">
              <FaTiktok/>
              <a 
                 href="https://www.tiktok.com/@navas_football_news"
                 target="_blank"
                 rel="noreferrer"
                 >
                  @navas_football_news</a>
            </div>

         </div>

         <a
           href={`${import.meta.env.BASE_URL}Resume.pdf`}
           className="download-btn"
           download
         >
            <FaDownload/>
            Download CV
         </a>
      </section>
    );
}

export default Contact;