import "./About.css";
import profile from "../assets/images/profile.jpg";
function About() {
 return (
 <section 
    className="about" 
    id="about"
    data-aos = "fade-up"
    >
    <div className="about-container">

        <div className="about-image">
            <img src={profile} alt="Navas" />
        </div>

      <div className="about-text">
        <h2>About Me</h2>

        <p>
            I'm <strong>Navas</strong>, a passionate Full Stack Developer and content creator who
            enjoys building modern, responsive, and user-friendly web applications while
            creating engaging digital content.
        </p>

        <p>
            I specialize in developing applications using React, ASP.NET Core,
            SQL Server, JavaScript, HTML, and CSS. Alongside software development,
            I create football-related content for social media, combining creativity
            with technology to reach and engage audiences.
        </p>

        <p>
            My goal is to continuously improve my technical and creative skills while
            building high-quality applications and producing valuable content that
            inspires and informs people.
        </p>

        <div className="about-stats">
            <div className = "stat-card">   
                <h3>2+</h3>
                <p>Years Learning</p>
            </div>

            <div className = "stat-card">
                <h3>10+</h3>
                <p>Projects Built</p>
            </div>

            <div className = "stat-card">
                <h3>5+</h3>
                <p>Technologies</p>
            </div>
        </div>

        <a href="#contact" className="about-btn">
            Contact Me
        </a>

      </div>
    </div>
    </section>
 );
}

export default About;