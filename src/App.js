import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AllUsers from './Components/AllUsers';
import UpdateUser from './Components/UpdateUser';
import CreateUser from './Components/CreateUser';
import { Link, BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllUsers/>}/>
      <Route path='/update' element={<UpdateUser/>}/>
      <Route path='/create' element={<CreateUser/>}/>
    </Routes>
    
    </BrowserRouter>

    </>
  );
}

export default App;
