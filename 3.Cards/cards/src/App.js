
import './App.css';
import  Cards  from './Cards';
import Charmander from './images/charmander.png';
import Jigglypuff from './images/jigglypuff.png';
import Squirtle from './images/squirtle.png';
import Eevee from './images/eevee.png';

function App() {
  return (
    <div className="App">
    <Cards image={Charmander} title="Charmander" description="lorem ipsum"/>
    <Cards image={Jigglypuff} title="JigglyPuff" description="lorem ipsum"/>
    <Cards image={Squirtle} title="Squirtle" description="lorem ipsum"/>
    <Cards image={Eevee} title="Eevee" description="lorem ipsum"/>
    </div>
  );
}

export default App;
