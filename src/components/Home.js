import Greeting from './Greeting';
import SkillGrid from './SkillGrid/SkillGrid';
import BottomHeader from './BottomHeader';
import Divider from '@mui/material/Divider';
import ProjectGrid from './ProjectGrid/ProjectGrid'

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

const Home = () => {
    return ( 
    <>
        <section className="top">
            <Greeting/>
          </section>  
          <Divider variant='middle'/>
          <section className="mid">
            <SkillGrid skills={skills}/>
          </section>
          <section className="bottom">
            <BottomHeader/>
            <ProjectGrid/>
        </section>       
    </> 
    );
}
 
export default Home;