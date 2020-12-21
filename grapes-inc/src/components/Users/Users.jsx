import React, {useState, useEffect} from 'react';
import style from './Users.module.css';
import * as Axios from 'axios';

const Users = (props) => {
const [FIO, setNameUser] = useState("");
const [position, setPosition] = useState("");
const [userList, setUserList] = useState([]);
const [newPos, setNewPos] = useState("");
const [newRat, setNewRat] = useState("");
const [newFr, setNewFr] = useState("");
const [newBk, setNewBk] = useState("");
const [newDesign, setNewDesign] = useState("");
const [newDFK, setNewDFK] = useState("");
const [newAVT, setNewAVT] = useState("");
const [newEST, setNewEST] = useState("");
const [newLateness, setNewLateness] = useState("");

useEffect(()=> {
   Axios.get('http://localhost:3001/api/get/users').then((response) => {
      setUserList(response.data)
   })
}, [])

const submitUser = () => {
   Axios.post('http://localhost:3001/api/insert/users', 
   {FIO: FIO, position: position});

   setUserList ([...userList, {FIO: FIO, position: position}])
   }

const deleteUser = (user) => {
   Axios.delete(`http://localhost:3001/api/delete/users/${user}`)
}

const updateUser = (user) => {
   Axios.put("http://localhost:3001/api/update/users/position", {FIO: user, position: newPos})
   setNewPos("")
}
const updateRat = (user) => {
   Axios.put("http://localhost:3001/api/update/users/rating", {FIO: user, rating: newRat})
   setNewRat("")
}
const updateFr = (user) => {
   Axios.put("http://localhost:3001/api/update/users/frontend", {FIO: user, frontend: newFr})
   setNewFr("")
}
const updateBk = (user) => {
   Axios.put("http://localhost:3001/api/update/users/backend", {FIO: user, backend: newBk})
   setNewBk("")
}
const updateDesign = (user) => {
   Axios.put("http://localhost:3001/api/update/users/design", {FIO: user, design: newDesign})
   setNewDesign("")
}
const updateDFK = (user) => {
   Axios.put("http://localhost:3001/api/update/users/diftask", {FIO: user, difficultTask: newDFK})
   setNewDFK("")
}
const updateAVT = (user) => {
   Axios.put("http://localhost:3001/api/update/users/average", {FIO: user, averageTask: newAVT})
   setNewAVT("")
}
const updateEST = (user) => {
   Axios.put("http://localhost:3001/api/update/users/esaytask", {FIO: user, easyTask: newEST})
   setNewEST("")
}
const updateLateness = (user) => {
   Axios.put("http://localhost:3001/api/update/users/lateness", {FIO: user, lateness: newLateness})
   setNewLateness("")
}

   return(
      <div>
         <div className={style.usersForm}>
            <div className={style.add}>Добавить нового разработчика</div>
            <div >Сотрудник:</div>
            <input className={style.input} type="text" name="FIO" onChange={(e)=> {setNameUser(e.target.value)}}/>
            <div>Должность:</div>
            <input className={style.input} type="text" name="position" onChange={(e)=> {setPosition(e.target.value)}}/>
            <button className={style.button} onClick={submitUser}>Добавить</button>
            
      </div>
      <hr className={style.hr}/>
      <div className={style.progers}>
      <div className={style.add}>Рабочие карточки программистов</div>
            {userList.map((value)=>{
               return (
               <div >
                  <div className={style.card}>
                  <div className={style.namebut}>
                  <div className={style.nameUser}>{value.FIO}</div> 
                  <button className={style.button} className={style.deleteUs} onClick={() => deleteUser(value.FIO)}>Удалить сотрудника</button>
                  </div>

               <div>Идентификатор: <span><b>{value.idcoders}</b></span></div>
               <div className={style.posit}>Должность: 
                   <span><b>{value.position}</b></span>
                   <div>
                   <input className={style.input}  type="text" onChange={(e)=> {setNewPos(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateUser(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Рейтинг: 
                   <span><b>{value.rating}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewRat(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateRat(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Frontend знания: 
                   <span><b>{value.frontend}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewFr(e.target.value) }} ></input>
                   <button className={style.button} onClick={()=> {updateFr(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Backend знания: 
                   <span><b>{value.backend}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewBk(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateBk(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Знания дизайна: 
                   <span><b>{value.design}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewDesign(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateDesign(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Трудные задачи: 
                   <span><b>{value.difficultTask}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewDFK(e.target.value) }} ></input>
                   <button className={style.button} onClick={()=> {updateDFK(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Средние задачи: 
                   <span><b>{value.averageTask}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewAVT(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateAVT(value.FIO)}}>Обновить</button>
                   </div>
               </div>
               <div className={style.posit}>Легкие задачи: 
                   <span><b>{value.easyTask}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewEST(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateEST(value.FIO)}}>Обновить</button>
                   </div>
               </div>        
               <div className={style.posit}>Опоздания: 
                   <span><b>{value.lateness}</b></span>
                   <div>
                   <input className={style.input} type="text" onChange={(e)=> {setNewLateness(e.target.value) }}></input>
                   <button className={style.button} onClick={()=> {updateLateness(value.FIO)}}>Обновить</button>
                   </div>
               </div> 
               <div className={style.marg}></div>
               </div>
               </div>)
            })}
         </div>
         
      </div>
   )
   }
   
export default Users;