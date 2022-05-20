import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home'
import {Routes,Route,Link} from 'react-router-dom'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/SignUp/SignUp';
import RequirAuth from './Pages/Login/RequirAuth';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinments from './Pages/Dashboard/MyAppoinments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/appointment' element={
        <RequirAuth>
          <Appointment/>
        </RequirAuth>
      }>

      </Route>
      <Route path='/dashboard' element={
        <RequirAuth>
          <Dashboard/>
        </RequirAuth>
      }>
                <Route index element={ <MyAppoinments/>} />
        <Route path='review' element={ <MyReview/>} />
        <Route path='MyHistory' element={ <MyHistory/>} />
        <Route path='users' element={ <RequireAdmin><Users/></RequireAdmin>} />
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
