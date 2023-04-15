import { Typography, Box } from '@mui/material';
import me from '../images/me.jpg';

const styles = {
    greeting: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '100%',
    },
    titleBox: {
        width: '70%'
    },
    name: {
        borderBottom: '2px solid #4ee1a0',
    },
    image: {
        position : 'absolute',
        right: 100,
        top: '0',
        width: '40%',
        zIndex: '-1',
        opacity: '0.5',
    }

}
const Greeting = () => {
    return (
        <div className="greeting" style={styles.greeting}>
            <Box sx={styles.titleBox}>
                <Typography variant='h2' sx={{

                }}>Hi, Nice to Meet You! I'm <span style={styles.name}>Poitier Stringer</span></Typography>
            </Box>
            <img  src={me} alt="me" style={styles.image}/>
        </div>
    );
}
 
export default Greeting