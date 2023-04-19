import { Grid } from '@mui/material';
import Skill from './Skill';
const styles = {
    root: {
        marginBottom: '2rem',
    }
}
const SkillGrid = ({skills}) => {
    return ( 
    <Grid container className="skill-grid" style={styles.root}>
        {skills?.map((skill) => (
            <Grid item xs={12} sm={6} md={4}>
                <Skill key={skill.id} skill={skill} />
            </Grid>
        ))}
    </Grid> 
    );
}
 
export default SkillGrid;