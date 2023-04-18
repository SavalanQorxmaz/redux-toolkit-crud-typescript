import {Routes, Route} from 'react-router-dom'
import './main.scss'
import Header from './header/Header';
import Calculator from './calculator/Calculator';
import Crud from './crud/Crud';

function App() {
  return (
    <div className="App">

  <Header/>
    <Routes>
      <Route path='/' element = {<Crud/>}/>
      <Route path='/calculator' element = {<Calculator/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
