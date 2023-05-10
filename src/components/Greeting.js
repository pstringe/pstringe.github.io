import { Typography, Box } from '@mui/material';
import me from '../images/me.jpg';

const styles = {
    greeting: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '55vh',
        marginBottom: '2rem'
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '70%',
        marginLeft: '1rem'
    },
    title: {
        marginBottom: '2rem',
    },
    name: {
        borderBottom: '2px solid #4ee1a0',
    },
    image: {
        position : 'absolute',
        right: 100,
        top: '0',
        maxWidth: '40%',
        maxHeight: '70vh',
        zIndex: '-1',
        opacity: '0.5',
    },
}

const Greeting = () => {
    return (
        <div className="greeting" style={styles.greeting}>
            <Box sx={styles.titleBox}>
                <Typography variant='h2'sx={styles.title}>
                    Hi, Nice to Meet You! I'm <span style={styles.name}>Poitier Stringer</span></Typography>
                <Typography variant='body'>Based in the US, I'm a front-end engineer passionate about building web apps users love</Typography>
            </Box>
            <img  src={me} alt="me" style={styles.image}/>
        </div>
    );
}
 
export default Greeting