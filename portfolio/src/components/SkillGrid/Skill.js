const Skill = ({skill}) => {
    return ( 
        <div className="skill">
            {skill?.name
                ? <h3>{skill?.name}</h3>
                : <h3>Unknown</h3>
            }
        </div>
    );
}
 
export default Skill;