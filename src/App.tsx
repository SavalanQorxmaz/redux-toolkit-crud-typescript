import {Routes, Route} from 'react-router-dom'
import './main.scss'
import Header from './header/Header';
import Testpage from './test/Testpage';

function App() {
  return (
    <div className="App">

  <Header/>
    <Routes>
      <Route path='/test' element = {<Testpage/>}/>
    </Routes>
    </div>
  );
}

export default App;
