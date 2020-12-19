import React, {useState, useEffect} from 'react';
import style from './Users.module.css';
import Axios, * as axios from 'axios';

const Users = (props) => {
const [nameUser, setNameUser] = useState("");
const [position, setPosition] = useState("");
const [userList, setUserList] = useState([]);

useEffect(()=> {
   Axios.get('http://localhost:3001/api/get').then((response) => {
      setUserList(response.data)
   })
}, [])

const submitUser = () => {
   Axios.post('http://localhost:3001/api/insert', 
   {nameUser: nameUser, pos: position}).then(()=> {
      alert('successful insert');
   })
}
   return(
      <div>
         <div> Подгрузка пользователей... </div>

         <div className={style.usersForm}>
            <label>Сотрудник:</label>
            <input type="text" name="FIO" onChange={(e)=> {setNameUser(e.target.value)}}/>
            <label>Должность:</label>
            <input type="text" name="position" onChange={(e)=> {setPosition(e.target.value)}}/>
            <button onClick={submitUser}>Add</button>

            {userList.map((value)=>{
               return (<h1>Имя - {value.nameUser} | Должность - {value.pos}</h1>
                  )
            })}
         </div>
      </div>
   )
   }
   
export default Users;