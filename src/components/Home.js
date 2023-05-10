import Greeting from './Greeting';
import SkillGrid from './SkillGrid/SkillGrid';
import BottomHeader from './BottomHeader';
import Divider from '@mui/material/Divider';
import ProjectGrid from './ProjectGrid/ProjectGrid'
import MindvitalsImg from '../images/mindvitals/physicians-dashboard.png';

const skills = [
    {
      name: 'Frontend',
      skillLevel: 4,
    },
    {
      name: 'API Development',
      skillLevel: 5,
    },
    {
      name: 'Database Design',
      skillLevel: 5,
    },
    {
      name: 'Cloud Infrastructure',
      skillLevel: 3,
    },
    {
      name: 'CI/CD',
      skillLevel: 3,
    },
    {
      name: 'Technical Architecture',
      skillLevel: 4,
    }
];

const projects = [
    {
        imgSrc: MindvitalsImg,
        title: 'Mindvitals',
        tags: ['React', 'Typescript', 'nest.js', 'MongoDB', 'AWS' ],
        link: `https://midvitalsproviderdashboard-dot-mindvitals-384402.uc.r.appspot.com/login`
    }
];

const Home = () => {
    return ( 
    <>
        <section className="top">
            <Greeting/>
          </section>  
          <Divider variant='middle'/>
          <section className="mid">
            <SkillGrid skills={skills}/>
            <Divider variant='middle'/>
            <ProjectGrid projects={projects}/>
          </section>
          <section className="bottom">
            <BottomHeader/>
        </section>       
    </> 
    );
}
 
export default Home;