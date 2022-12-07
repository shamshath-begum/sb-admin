import React from 'react'
import BasicCard from './CardComponents/BasicCard';
import ProgressCard from './CardComponents/ProgressCard';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';


function Dashboard({data,users,setUsers}) {
  let navigate=useNavigate()
  let handleDelete=(i)=>{
    let newArray=[...users]
    newArray.splice(i,1)
    setUsers(newArray)
    console.log(users[i]);
  }
return <div id="content-wrapper" className="d-flex flex-column">
  {/* <!-- Main Content -->*/}
       <div id="content">
  {/* <!-- Begin Page Content -->*/}
      <div className="container-fluid">
  {/*  <!-- Page Heading -->*/}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

         {/* <!-- Content Row -->*/}
          <div className="row">
         <BasicCard label='Earnings (Monthly)' value={data.earningMonthly} icon='fa-calendar' border='primary'/>
         <BasicCard label='Earnings (Annual)' value={data.earningYearly} icon='fa-dollar' border='success'/>
<ProgressCard label='Tasks' value={data.task} icon='fa-clipboard-list' border='info' />

         <BasicCard label='Pending Requests' value={data.pendingRequest} icon='fa-comments' border='warning'/>
              
             
        </div>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Timings</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((e,i)=>{
             return <tr key={i}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.batch}</td>
                <td>{e.timings}</td>
                <td>
                  <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}> <i className="fas fa-pen-to-square"></i>Edit</Button>
                  &nbsp;
                  &nbsp;
                  <Button variant="danger" onClick={()=>handleDelete(i)}> <i className="fas fa-trash"></i>Delete</Button>
                </td>
              </tr>
          })
        }
        
      </tbody>
    </Table>

      </div>
    </div>
  </div>
  
}

export default Dashboard;