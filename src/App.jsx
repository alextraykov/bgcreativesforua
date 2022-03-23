import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { theme } from './theme';
import { Header } from './components/Header';
import { JobsList } from './components/JobsList';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { About } from './components/About';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<JobsList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
