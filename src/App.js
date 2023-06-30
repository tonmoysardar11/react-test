import './App.css';
import Navbar from './components/Navbar';
import ellipse from './bgmedia/Ellipse 1.png'
import p1 from './bgmedia/Polygon 1.png'
import p2 from './bgmedia/Polygon 2.png'
import i1 from './bgmedia/pngwing 1.png'
import Frame3 from './components/Frame3';
import Frame2 from './components/Frame2';
import Frame78 from './components/Frame78';
import Frame86 from './components/Frame86';
import Frame87 from './components/Frame87';

function App() {
  return (
    <div className="App">
      {/* ------background------ */}
      <div className="background">
        <img src={ellipse} alt="" id='ellipse'/>
        <img src={p1} alt="" id='p1'/>
        <img src={p2} alt="" id='p2' />
        <img src={i1} alt="" id='i1' />
        
      </div>
      <Navbar/>
      <Frame3/>
      <Frame2/>
      <Frame78/>
      <Frame86/>
      <Frame87/>



    </div>
  );
}

export default App;
