import {Box} from '@mui/material';

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
        gap: '1rem',
    }
}

const Project = ({imgSrc, title, tags, link}) => {
    return (
        <Box sx={styles.root}>
            <a href={link} target="_blank" rel="noreferrer">
                <Box sx={{}}>
                    <img src={imgSrc} alt="" style={styles.img} />
                </Box>
                <Box>
                    {title}
                </Box>
            </a>
            <h1>Project</h1>
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