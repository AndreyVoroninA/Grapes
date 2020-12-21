import React, {useState, useEffect} from 'react';
import style from './Projects.module.css';
import fromHomePage from './../HomePage/HomePage.module.css'
import * as Axios from 'axios';
import Tasks from '../Tasks/Tasks';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Projects = () => {

const [nameProjects, setNameProjects] = useState("");
const [deadline, setDeadline] = useState("");
const [projectList,setProjectList] = useState([]);


useEffect(()=> {
   Axios.get('http://localhost:3001/api/get/projects').then((response) => {
      setProjectList(response.data)
   })
}, [])

const submitProject = () => {
      Axios.post('http://localhost:3001/api/post/project', 
      {nameProjects: nameProjects, deadlineProject: deadline}
      );
      setProjectList ([...projectList, {nameProjects: nameProjects, deadlineProject: deadline}])
   }

   return(
      <div>
         <div className={style.addProject}>
            <div className={style.logo}>Добавление нового проекта</div>
            <div>
               <div>Название проекта:</div>
               <input type="text" onChange={(e)=> {setNameProjects(e.target.value)}}></input>
               <div>Срок сдачи:</div>
               <input type="text" onChange={(e)=> {setDeadline(e.target.value)}}></input>
               <button onClick={submitProject}>Добавить:</button>
            </div>
         </div>
         <hr className={fromHomePage.hr}/>
         <div>
            <div className={style.logo}>Проекты</div>
            <div className={style.listProjects}>
               {projectList.map((value) => {
                  let time = value.deadlineProject;
                  return(
                     <div>
                        <div><b>{value.nameProjects}</b></div>
                        <div>Срок сдачи: <i>{(new Date(time).toLocaleDateString())}</i></div>
                        <BrowserRouter>
                        <Route path="/pro/task" render={() => <Tasks id={value.idProjects}/>}/>
                        <Route path="/projects" render={()=>
                        <div className={style.item}>
                           <NavLink to="/pro/task" activeClassName={style.active}>Подзадачи</NavLink>
                        </div>
                        }/>
                        </BrowserRouter>
                        <hr className={fromHomePage.hr}/>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}

export default Projects;
/*
*/