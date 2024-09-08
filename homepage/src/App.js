
import React from 'react';
import './App.css';
import imgEqpos from './imagesHomepage/imgEqpos.png';
import imgSystem from './imagesHomepage/imgSystem.png';
import imgClock from './imagesHomepage/imgClock.png';
import imgVerkauf from './imagesHomepage/imgVerkauf.png';
import imgBeenden from './imagesHomepage/imgBeenden.png'
import { BrowserRouter as router, Route, Routes, Link, useNavigate} from 'react-router-dom';


function App() {
  return (
    <div>

      <div id='divImgEqpos'>
        <img src={imgEqpos} alt='eqpos Startup' height={200}></img>
      </div>

      <div id='nameDiv'>
        <div id='würzburgerStube'>Würzburger Stube</div>
        <div id='würzburgerStubeWithBrackets'>( Würzburger Stube )</div>
        <div className='address'>Würzburger Hauptstr. 69</div>
        <div className='address'>67551 Worms</div>
      </div>

      <div id='buttonsDiv'>

        <button id='system'><img src={imgSystem} alt='System' height={30} width={26}></img> <div id='systemDiv'>System</div></button>
        <button id='dauerhistorie'><img src={imgClock} alt='Dauerhistorie' height={26}></img><div id='dauerhistorieDiv'>Dauerhistorie</div></button>
        <button id='verkauf'><img src={imgVerkauf} alt='Verkauf' height={30}></img><div id='verkaufDiv'>Verkauf</div></button>
        <button id='beenden'><img src={imgBeenden} alt='Beenden' height={34}></img><div id='beendenDiv'>Beenden</div></button>

      </div>
    </div>
  );
}

function Verbindung(){
return(
  <div>
    <a href="/src" id='verkaufDiv'></a>
    <img src={imgVerkauf} alt='Verkauf' height={30}></img>
  </div>
)
}

export default Verbindung;