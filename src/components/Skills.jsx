import "./Skills.css";
import SkillCard from "./SkillCard";
import { FaHtml5, FaCode, FaDatabase, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {

  return (
    <section 
       className="skills" 
       id="skills"
       data-aos = "fade-up">
      <h2>My Skills</h2>
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-grid">
            <SkillCard icon={<FaHtml5 />} name="HTML" />
            <SkillCard icon={<FaCss3Alt />} name="CSS" />
            <SkillCard icon={<FaJs />} name="JavaScript" />
            <SkillCard icon={<FaReact />} name="React" />
          </div>
        </div>

       <div className="skill-category">
          <h3>Backend</h3>
          <div className="skill-grid">
            <SkillCard icon={<SiDotnet />} name="ASP.NET Core" />
            <SkillCard icon={<FaDatabase />} name="SQL Server" />
            <SkillCard icon={<FaCode />} name="C#" />
          </div>
        </div> 

        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skill-grid">
            <SkillCard icon={<FaGitAlt />} name="Git" />
            <SkillCard icon={<FaGithub />} name="GitHub" />
            <SkillCard icon={<VscVscode />} name="Vs Code" />
          </div>
        </div>

    </section>
  );
}

export default Skills;