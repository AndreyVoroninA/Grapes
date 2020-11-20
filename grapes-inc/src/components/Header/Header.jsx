import React from 'react';
import style from './Header.module.css';

const Header = () => {
   return(
      <div className={style.header}>
         <div className={style.header_content}>
            <div className={style.image}>
               <img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/grapes-1692840-1440561.png'/>
            </div>
            <div className={style.logo}>
               Grapes inc.
            </div>
            <div className={style.enter}>Войти</div>
         </div>
      </div>
   )
}
export default Header;