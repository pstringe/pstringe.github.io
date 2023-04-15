import './App.css';
import Container from './components/Container';
import Nav from './components/Nav';
import Greeting from './components/Greeting';
import SkillGrid from './components/SkillGrid/SkillGrid';
import BottomHeader from './components/BottomHeader';
import ProjectGrid from './components/ProjectGrid.js/ProjectGrid';
import Footer from './components/Footer';
import { themeOptions } from './theme';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
]

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <div className="App">
        <Container>
          <Nav/>
          <section className="top">
            <Greeting/>
          </section>  
          <section className="mid">
            <SkillGrid skills={skills}/>
          </section>
          <section className="bottom">
            <BottomHeader/>
            <ProjectGrid/>
          </section>       
        </Container>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
