import Social from "./Social";
import { Link } from 'react-router-dom';

const styles = {
    root: {
        position: 'sticky',
        top: 0,
    },
    title: {
        color: 'white',
        fontFamily: 'Space Grotesk',
        fontWeight: 700,
        textAlign: 'left',
        textDecoration: 'none',
    }
}

const Nav = () => {
    return ( 
        <nav style={styles.root}>
            <div className='navTitle'><Link to='/' style={styles.title}><h1 >Pstringe</h1></Link></div>
            <Social/>
        </nav>
    );
}
 
export default Nav;