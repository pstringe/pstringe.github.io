import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const styles = {
    root: {
        margin: '1rem',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    tags: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '1rem'
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    }
}

const Project = ({imgSrc, title, tags, link}) => {
    return (
        <Box sx={styles.root}>
            <Link to={link} style={styles.link}>
                <Box sx={{}}>
                    <img src={imgSrc} alt="" style={styles.img} />
                </Box>
                <Typography variant='h5'>
                    {title}
                </Typography>
            </Link>
            <Box sx={styles.tags}>
                {tags.map((tag) => (
                    <Box >
                        {tag}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
 
export default Project;