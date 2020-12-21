import React, {useState, useEffect} from 'react';
import style from './Tasks.module.css';
import fromHomePage from './../HomePage/HomePage.module.css'
import * as Axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styleFromProjects from '../Projects/Projects.module.css';

const Tasks = (props) => {
   const [nTask, setNameTask] = useState("");
   const [complexity, setComplexity] = useState("");
   const [performers, setPerformers] = useState("");
   const [reqKnow, setReqKnow] = useState("");
   const [deadkineTask, setDeadkineTask] = useState("");
   const [curator, setCurator] = useState("");
   const [taskList,setTaskList] = useState([]);

   const submitTask = () => {
      Axios.post('http://localhost:3001/api/post/tasks', 
      {nameTask: nTask, complexity: complexity, performers: performers, requiredKnowlege: reqKnow,
         deadkineTask: deadkineTask, curator:curator, idProjects: props.id}
      );
      setTaskList([...taskList, {nameTask: nTask, complexity: complexity, performers: performers, requiredKnowlege: reqKnow,
         deadkineTask: deadkineTask, curator:curator, idProjects: props.id}])
   }
   
   useEffect(()=> {
      Axios.get(`http://localhost:3001/api/get/tasks/${props.id}`).then((response) => {
         setTaskList(response.data)
      })
   }, [])

   return (
      <div>
         <div>
                 <div className={styleFromProjects.item}>
                 <NavLink to="/projects" activeClassName={style.active}>Скрыть панель</NavLink>
                      </div>
                      {taskList.map((value) => {
                         let time = value.deadkineTask;
                  return(
                     <div>
                           <div className={style.listTask}>

                           <div>Название задачи: <b>{value.nameTask}</b></div>
                           <div>Сложность: <b>{value.complexity}</b></div>
                           <div>Количество разработчкиков: <b>{value.performers}</b></div>
                           <div>Требуемые навыки: <b>{value.requiredKnowlege}</b></div>
                           <div>Окончание разработки: <b>{(new Date(time).toLocaleDateString())}</b></div>
                           <div>Куратор: <b>{value.curator}</b></div>
                           </div>
                           <div> 
                           <hr className={style.hr}/>
                           </div>
                     </div>
                     
             )})}
                    
         <div className={style.blockTask}>
           <div>Название задачи</div>
            <input onChange={(e)=> {setNameTask(e.target.value)}} 
            className={style.input} type="text"></input>
            <div>Сложность</div>
            <input onChange={(e)=> {setComplexity(e.target.value)}}
            className={style.input} type="text"></input>
            <div>Требуемое количество разработчиков</div>
            <input onChange={(e)=> {setPerformers(e.target.value)}}
            className={style.input} type="text"></input>
            <div>Требуемые навыки</div>
            <input onChange={(e)=> {setReqKnow(e.target.value)}}
            className={style.input} type="text"></input>
            <div>Срок завершения</div>
            <input onChange={(e)=> {setDeadkineTask(e.target.value)}}
            className={style.input} type="text"></input>
            <div>Куратор</div>
            <input onChange={(e)=> {setCurator(e.target.value)}}
            className={style.input} type="text"></input>
            <button className={style.button} onClick={submitTask}>Добавить подзадачу</button>
            <div> id Проекта: {props.id}</div>
           </div>
         </div>
      </div>
   )
}

export default Tasks;