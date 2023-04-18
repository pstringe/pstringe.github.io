import './App.css';
import Container from './components/Container';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { themeOptions } from './theme';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="sm">
          <Nav/>
          <Outlet/>
        </Container>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
