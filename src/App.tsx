import './App.css';
import './styles.css';
import { Navbar } from './Navbar&Footer/Navbar';
import { IndexPage } from './IndexPage/IndexPage';
import Footer from './Navbar&Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <IndexPage/>

      <Footer/>
    </div>
  ); 
}

export default App;
