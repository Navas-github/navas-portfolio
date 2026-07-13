import "./SkillCard.css";

function SkillCard({ icon, name }) {
  return (
    <div className="skill-card" data-aos = "zoom-in">
      <div className="skill-icon">
        {icon}
      </div>
      <span>{name}</span>
    </div>
  );
}

export default SkillCard;