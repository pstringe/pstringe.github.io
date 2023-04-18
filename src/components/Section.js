import {Box, Typography, Divider, Grid} from '@mui/material';
import ReactMarkdown from 'react-markdown';

const styles = {
    title: {
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        textAlign: 'left',
    },
    body: {
        fontFamily: 'Space Grotesk',
        justifyContent: 'left',
        '& a': {
            color: '#4ee1a0',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            }
        }
    },
    img: {
        maxWidth: '40vw',
    },
    right: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'top',
        marginBottom: '2rem',
        gap: '1rem'
    },
    full: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        marginBottom: '2rem'
    }
}

const SectionLeftImage = ({title, body, imgSrc}) => {
    return ( 
        <Grid container>
            <Grid item xs={12} sm={6} >
                <Typography variant="h4" sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body" sx={styles.body}>
                    <ReactMarkdown>{body}</ReactMarkdown>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} className="section-left-image" >
                <img src={imgSrc} alt="left" style={styles.img}/>
            </Grid>
        </Grid>
    );
}

const SectionRightImage = ({title, body, imgSrc}) => {
    return ( 
        <Grid container>
            <Grid item xs={12} sm={6} className="section-right-image" >
            <img src={imgSrc} alt="right" style={styles.img}/>
            </Grid>
            <Grid item xs={12} sm={6} >
                <Typography variant="h4" sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body" sx={styles.body}>
                    <ReactMarkdown>{body}</ReactMarkdown>
                </Typography>
            </Grid>
       
    </Grid>
    );
}

const SectionFull = ({title, body}) => {
    return (
        <Box sx={styles.full}>
            <Box>
                <Typography variant="h4" sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body" sx={styles.body}>
                    <ReactMarkdown>{body}</ReactMarkdown>
                </Typography>
            </Box>
        </Box> 
    );
}

const renderSection = (type, title, body, imgSrc='') => {
    switch (type) {
        case 'left-image':
            return <SectionLeftImage title={title} body={body} imgSrc={imgSrc}/>
        case 'right-image':
            return <SectionRightImage title={title} body={body} imgSrc={imgSrc}/>
        case 'full':
            return <SectionFull title={title} body={body}/>
        default:
            return <SectionFull title={title} body={body}/>
    }
}

const Section = ({type, title, body, imgSrc}) => {
    return (
        <Box sx={{
            width: '100%',
            padding: '2rem',
        }}>
            {renderSection(type, title, body, imgSrc)}
        </Box>
    );
}
 
export default Section;