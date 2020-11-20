import { BrowserRouter, Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import Homepage from './components/HomePage/HomePage';
import Navbar from './components/NavBar/Navbar';

const App = (props) => {
  return(
    <BrowserRouter>
    <div className={style.app}>
      <Header />
      <Navbar />
      <div className={style.main_content}>
        <Route path="/home" render={() => <Homepage />}/>
        <Route path="/users" render={() => <div>Подгрузка пользователей</div>}/>
        <Route path="/projects" render={() => <div>Подгрузка проектов</div>}/>
        <Route path="/planning" render={() => <div>Подгрузка планирования</div>} />
        <Route path="/schedule" render={() => <div>Подгрузка график и контроль</div>}/>
      </div>
    </div>
    </BrowserRouter>
  )
}
export default App;

