import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Description from './components/description';
import Photo from './components/photos';
import { Button } from '@material-ui/core';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <Description />
        <Photo />
        <Button variant="contained" color="primary">
            Click Aqui para conocer más
        </Button>
        <Footer />  
      </div>
    </div>
  );
}

export default App;
