import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Index from './components/index';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;