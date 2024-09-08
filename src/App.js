import React from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import imgBlue from './images/imgBlue.png';
import imgPlus from './images/imgPlus.png';
import imgAusserHaus from './images/imgAusserHaus.png';
import imgTable from './images/imgTable.png';
import imgTableSmall from './images/imgTableSmall.png';
import imgBagWithArrow from './images/imgBagWithArrow.png';
import imgKasse from './images/imgKasse.png';
import imgSearch from './images/imgSearch.png';
import imgAbc from './images/imgAbc.png';
import imgEnter from './images/imgEnter.png';
import imgKundenkarte from './images/imgKundenkarte.png';
import imgLetzterBon from './images/imgLetzterBon.png';

function App() {
  return (


    <div id="wholeContainer">


      <div id="leftContainer">

        <div id="leftContainerFirst">
          <div id="oneFirst">
            <button id="x" className="buttonsOneFirst"><i className="fas fa-times"></i></button>
            <button id="plus" className="buttonsOneFirst"><i className="fas fa-plus"></i></button>
            <button id="minus" className="buttonsOneFirst"><i className="fas fa-minus"></i></button>
            <button className="buttonsOneFirst arrows"><i className="fas fa-arrow-up"></i></button>
            <button className="buttonsOneFirst arrows"><i className="fas fa-arrow-down"></i></button>
          </div>
          <div id="twoFirst">
            <table>
              <thead>
                  <tr>
                    <th>Gang</th>
                    <th>Artikelname</th>
                    <th>Menge</th> 
                    <th>E-Preis</th>
                    <th>Summe</th> 
                  </tr>
              </thead>
              <tbody>
                  {/* later maybe (idk) */}
              </tbody>
            </table>
            <img src={imgBlue} alt='Blue Image' width={297.5}></img>
          </div>
        </div>

        <div id="leftContainerSecond">
          <div id="oneSecond">
            <div className="imgOneSecond" id="divImgPlusOneSecond">
              <img src={imgPlus} alt="Plus" width={40} height={40}></img>            
            </div>
            <div className="imgOneSecond" id="divImgAusserHausOneSecond">
              <img src={imgAusserHaus} alt="Ausser Haus" width={40} height={40}></img>
            </div>
          </div>
          <div id="twoSecond">
            <div id="divImgTable">
              <img src={imgTableSmall} alt="Table" height={30}></img>
            </div>
            <div id="divImgBagWithArrow">
              <img src={imgBagWithArrow} alt="Bag with Arrow" width={65}></img>
            </div>
            <div id="divImgBezahlung">
              <img src={imgKasse} width={200} height={38}></img>
            </div>
          </div>
        </div>

        <div id="leftContainerThird">
          <input type="text"></input>
          <div id="divImgSearch">
            <img src={imgSearch} height={24}></img>
          </div>
          <div id="divImgAbc">
            <img src={imgAbc} alt="ABC" height={12}></img>
          </div>
        </div>

        <div id="leftContainerFourth">
          <div id="oneFourth">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>0</button>
            <button>00</button>
            <button id="xOneFourth">X</button>
          </div>
          <div id="twoFourth">
            <button id="c">C</button>
            <button id="tischOeffnen">Tisch Öffnen</button>
            <img src={imgEnter} alt="Enter" height={84}></img>
          </div>
        </div>

      </div>

      <div id="rightContainer">
        
        <div id="topDiv">
        <button className="brightPink">SCHNITZELTAG</button>
        <button className="brightPink">HÄHNCHEN & PUTE</button>
        <button className="aquaBlue">DEUTSCHE GETRÄNKE</button>
        <button className="brightPink">VORSPEISEN</button>
        <button className="brightPink">NUDELGERICHTE</button>
        <button className="aquaBlue">INT. GETRÄNKE</button>
        <button className="brightPink">SALATE & SUPPEN</button>
        <button className="green">PIZZA</button>
        <button className="aquaBlue">LONGDRINKS</button>
        <button className="brightPink">RIND</button>
        <button className="brightPink">DESSERT BEILAGE</button>
        <button className="red">SAISONKARTE</button>
        <button className="brightPink">LAMM FISCH</button>
        <button className="aquaBlue">GETRÄNKE</button>
        <button className="aquaBlue">GETRÄNKE</button>
        <button className="brightRed">FLEISCH</button>
        <button className="aquaBlue">ALKOHOLFR. GETRÄNKE</button>
        <button className="grey">TRAUERFEIER</button>
        <button className="brightPink bottomButtons">KLEINE HUNGER</button>
        <button className="aquaBlue bottomButtons">HEIßE GETRÄNKE</button>
        <button className="yellow bottomButtons">Ostern Karte</button>
        </div>

        <div id="middleDiv"></div>

        <div id="bottomDiv">
          <div id="gOneDiv">
            <button>G1</button>
          </div>
          <div id="rightContainerBottom">
            <div id="divKundenkarte">
              <img src={imgKundenkarte} height={34}></img>
              <span id="kundenkarte">Kundenkarte</span>
            </div>
            <div id="divLetzterBon">
              <img src={imgLetzterBon} height={34}></img>
              <span id="letzterBon">Letzter Bon</span>
            </div>
            <div id="divArrowsBottom">
              <button><i className="fas fa-arrow-up"></i></button>
              <button><i className="fas fa-arrow-down"></i></button>
            </div>
            <div id="divGo">
              <button>GO</button>
            </div>
          </div>
        </div>

      </div>

    </div>


  );
}

export default App;
