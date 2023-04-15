import { Grid } from '@mui/material';
import Skill from './Skill';

const SkillGrid = ({skills}) => {
    return ( 
    <Grid container className="skill-grid">
        {skills?.map((skill) => (
            <Grid item xs={12} sm={6} md={4}>
                <Skill key={skill.id} skill={skill} />
            </Grid>
        ))}
        
    </Grid> 
    );
}
 
export default SkillGrid;