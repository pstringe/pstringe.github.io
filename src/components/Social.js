import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

 
const Social = () => {
    return (
        <div className='social'>
            <a href="https://github.com/pstringe" target="_blank" rel="noreferrer">
                <GitHubIcon color='text'/>
            </a>
            <a href="https://www.linkedin.com/in/poitier-stringer/" target="_blank" rel="noreferrer">
                <LinkedInIcon color='text'/>
            </a>
        </div>
    );
}
 
export default Social;