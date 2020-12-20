import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import Homepage from './components/HomePage/HomePage';
import Navbar from './components/NavBar/Navbar';
import Users from './components/Users/Users';
import Projects from './components/Projects/Projects.jsx';

const App = (props) => {
  return(
    <BrowserRouter>
    <div className={style.app}>
      <Header />
      <Navbar />
      <div className={style.main_content}>
        <Route path="/home" render={() => <Homepage />}/>
        <Route path="/users" render={() => <Users />}/>
        <Route path="/projects" render={() => <Projects />}/>
        <Route path="/planning" render={() => <div>Подгрузка планирования</div>} />
        <Route path="/schedule" render={() => <div>Подгрузка график и контроль</div>}/>
      </div>
    </div>
    </BrowserRouter>
  )
}
export default App;

