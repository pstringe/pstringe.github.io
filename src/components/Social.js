import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const styles = {
    social: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
    } 
}

const Social = () => {
    return (
        <div className='social' style={styles}>
            <a href="https://github.com/pstringe" target="_blank" rel="noreferrer">
                <GitHubIcon color='text'/>
            </a>
            <a href="https://www.linkedin.com/in/poitier-stringer/" target="_blank" rel="noreferrer">
                <LinkedInIcon color='text'/>
            </a>
            <a href="https://dev.to/pstringe" target="_blank" rel="noreferrer">
                <LogoDevIcon color='text'/>
            </a>
        </div>
    );
}
 
export default Social;