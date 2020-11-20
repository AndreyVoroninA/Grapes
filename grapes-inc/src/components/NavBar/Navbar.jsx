import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const NavBar = () => {
   return(
     <div className={style.navb}>
       <div className={style.panel}>
         <div className={style.item}>
          <NavLink to="/home" activeClassName={style.active}>Главня</NavLink>
         </div>
         <div className={style.item}>
          <NavLink to="/users" activeClassName={style.active}>Пользователи</NavLink>
         </div>
         <div className={style.item}> 
          <NavLink to="/projects" activeClassName={style.active}>Проекты</NavLink>
         </div>
         <div className={style.item}>
          <NavLink to="/planning" activeClassName={style.active}>Планирование</NavLink>
         </div>
         <div className={style.item}>
          <NavLink to="/schedule" activeClassName={style.active}>График и контроль</NavLink>
         </div>
       </div>
     </div>
   )
 }

 export default NavBar;