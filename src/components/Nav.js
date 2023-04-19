import Social from "./Social";
import { Link } from 'react-router-dom';

const styles = {
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
        <nav>
            <div className='navTitle'><Link to='/' style={styles.title}><h1 >Pstringe</h1></Link></div>
            <Social/>
        </nav>
    );
}
 
export default Nav;