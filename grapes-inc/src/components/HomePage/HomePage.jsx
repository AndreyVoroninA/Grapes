import React from 'react';
import style from './HomePage.module.css';
import new1 from './../../img/news/new-1.png';

const Homepage = () => {
   return (
      <div>
         <div>
            <div className={style.events}>Новости</div>
            <hr className={style.hr}/>
            <div className={style.news}>
               <div className={style.date}>21.11.2020</div>
               <div className={style.description}>
                     <div className={style.theme}>Приняты решения по разработке информационной системы для Grapes inc.</div>
                        <div className={style.img}><img src={new1}/></div>
                      <div className={style.theme}> 
                           Данная информационная система будет разрабатываться с использованием библиотеки javascript - React.js. Для управления состоянием (state management) 
                           будет использована библиотека Redux. 
                      </div>
               </div>
            </div>
            <hr className={style.hr}/>
         </div>
      </div>
   )
}
export default Homepage;