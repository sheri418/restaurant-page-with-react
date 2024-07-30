import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Work from './Component/work';
import Blog from './Component/Blog'; 
import Contact from './Component/Contact';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="app">
        <Home/>
        <About/>
        <Work/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
