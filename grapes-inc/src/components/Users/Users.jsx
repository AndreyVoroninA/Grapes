import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
   return(
      <div>
         <div> Подгрузка пользователей... </div>

         <div className={style.usersForm}>
            <label>Сотрудник:</label>
            <input type="text" name="FIO"/>
            <label>Должность:</label>
            <input type="text" name="position"/>
            <button>Addn</button>
         </div>
      </div>
   )
   }
   
export default Users;