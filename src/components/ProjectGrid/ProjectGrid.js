import {Grid, Typography, Box} from '@mui/material';
import Project from './Project';

const styles = {
    root: {
        textAlign: 'left',
    },
    title : {
        marginLeft: '1rem',
        marginBottom: '1rem'
    },
};

const ProjectGrid = ({projects}) => {
    return ( 
    <Box sx={styles.root}>
        <Typography variant="h3" sx={styles.title}>
            Projects
        </Typography>
        <Grid container className="project-grid" style={styles.root}>
            {projects?.map((project) => (
                <Grid item xs={12} sm={6} md={4}>
                    <Project imgSrc={project.imgSrc} project={project.title} tags={project.tags} link={project.link} title={project.title}/>
                </Grid>
            ))}
        </Grid> 
    </Box>
);
}
 
export default ProjectGrid;