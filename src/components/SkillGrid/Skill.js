import { Typography, Box } from "@mui/material";

const styles = {
    skill: {
        width: '100%',
        padding: '1rem',
        mariginBottom: '1rem',
        textAlign: 'left'
    },
}

const Skill = ({skill}) => {
    return ( 
        <Box sx={styles.skill}>
            <Typography variant="h5" className="skill">
                {skill?.name
                    ? skill?.name
                    : 'Unknown'
                }
            </Typography>
            <Typography variant="body" className="skill-level">
                Skill Level: {skill?.skillLevel
                    ? skill?.skillLevel
                    : 'Unknown'
                }
            </Typography>
        </Box>
    );
}
 
export default Skill;