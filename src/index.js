import React from 'react';
import ReactDOM from 'react-dom';
import AboutClub from './AboutClub';
import symbol from './images/symbol.png'
import MagicBall from "./magicBall"



ReactDOM.render(
  <React.StrictMode>
     <AboutClub clubsName='Dynamo' country='Kiev1' symbol={symbol} goal={'Чемпионы украины: 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2003, 2004, 2007, 2009, 2015, 2016, 2021'} alt="dynamo-symbol"aboutClubClass="aboutClubDynamo" stars="2" wins="500" composition={['Леонид Клюев','Олег Макаров','Николай Кольцов','Виталий Щербаков']}/>
    <MagicBall/>
  </React.StrictMode>,
  document.getElementById('root')
);
