import Skill from './Skill';

const SkillGrid = ({skills}) => {
    return ( 
    <div className="skill-grid">
        {skills?.map((skill) => (
            <Skill key={skill.id} skill={skill} />
        ))}
        
    </div> 
    );
}
 
export default SkillGrid;