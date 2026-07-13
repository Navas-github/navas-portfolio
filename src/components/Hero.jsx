import "./Hero.css";
import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-right">
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Navas</span> 👋
        </h1>

        <h2>Full Stack Developer & Content Creator</h2>

        <p>
          I build modern, responsive web applications using React,
          ASP.NET Core, SQL Server, and JavaScript while creating
          engaging football content for social media.
        </p>
        <div className="hero-buttons">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Download CV</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Profile Picture" />
      </div>
    </section>
  );
}

export default Hero;