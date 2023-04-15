import './App.css';
import Container from './components/Container';
import Nav from './components/Nav';
import Greeting from './components/Greeting';
import Portrait from './components/Portrait';
import SkillGrid from './components/SkillGrid/SkillGrid';
import BottomHeader from './components/BottomHeader';
import ProjectGrid from './components/ProjectGrid.js/ProjectGrid';
import Footer from './components/Footer';
import { themeOptions } from './theme';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <div className="App">
        <Container>
          <Nav/>
          <section className="top">
            <Greeting/>
            <Portrait/>
          </section>  
          <section className="mid">
            <SkillGrid/>
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
