import Sidebar from './components/Sidebar';
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NestedExample from './components/NestedExample';
import Accounts from './components/NestedComponents/Accounts';
import Profile from './components/NestedComponents/Profile';
import {useState} from 'react'
function App() {
  let data={
    earningMonthly:"40,000",
    earningYearly:"2,15,000",
    task:"70",
    pendingRequest:"18"
    }

    let [users , setUsers] = useState([
      {
        name:"shamshath",
        email:"shamshath@gmail.com",
        mobile:"9842303430",
        batch:"B38WET",
        Timings:"11am to 1pm"
      },
      {
        name:"Bilal",
        email:"Bilal@gmail.com",
        mobile:"9842303430",
        batch:"B38WET",
        Timings:"11am to 1pm"
      },
      {
        name:"Iqhra",
        email:"Iqhra@gmail.com",
        mobile:"9842303430",
        batch:"B38WET",
        Timings:"11am to 1pm"
      },
      {
        name:"Rifa",
        email:"Rifa@gmail.com",
        mobile:"9842303430",
        batch:"B38WET",
        Timings:"11am to 1pm"
      }

    ])

  return <div id="wrapper">
    <BrowserRouter>
  <Sidebar/>
  <Routes>
    <Route path='/dashboard' element={<Dashboard data={data} users={users} setUsers={setUsers}/>}/>
   <Route path='/add-user' element={<AddUser users={users} setUsers={setUsers}/>}/>
   <Route path='/edit-user/:id' element={<EditUser users={users} setUsers={setUsers}/>}/>
   <Route path='/nested-example' element={<NestedExample/>}>
       <Route path='accounts' element={<Accounts/>}/>
       <Route path='profile' element={<Profile/>}/>
   </Route>
  <Route path='*' element={<Navigate to={'/dashboard'}/>}/>
 </Routes>
  </BrowserRouter>
    </div>
}
export default App;
