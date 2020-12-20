import React, {useState, useEffect} from 'react';
import style from './Projects.module.css';
import fromHomePage from './../HomePage/HomePage.module.css'
import * as Axios from 'axios';

const Projects = () => {

const [nameProjects, setNameProjects] = useState("");
const [deadline, setDeadline] = useState("");

const submitProject = () => {
      Axios.post('http://localhost:3001/api/post/project', 
      {nameProjects: nameProjects, deadlineProject: deadline});
   }

   return(
      <div>
         <div className={style.addProject}>
            <div className={style.logo}>Добавление нового проекта</div>
            <div>
               <div>Название проекта:</div>
               <input type="text" onChange={(e)=> {setNameProjects(e.target.value)}}></input>
               <div>Срок окончания</div>
               <input type="text" onChange={(e)=> {setDeadline(e.target.value)}}></input>
               <button onClick={submitProject}>Добавить:</button>
            </div>
         </div>
         <hr className={fromHomePage.hr}/>
      </div>
   )
}

export default Projects;