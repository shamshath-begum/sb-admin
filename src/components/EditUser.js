import {useParams} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
function EditUser({users,setUsers}) {
  let [name,setName]=useState('')
  let [email,setEmail]=useState('')
  let [batch,setBatch]=useState('')
  let [mobile,setMobile]=useState('')
  let [timings,setTimings]=useState('')
  let navigate=useNavigate()

  useEffect(()=>{
    if(id){
      setName(users[id].name)
      setEmail(users[id].email)
      setMobile(users[id].mobile)
      setBatch(users[id].batch)
      setTimings(users[id].timings)
    }
  },[])

  let handleSubmit=()=>{
    let newData={name,email,mobile,batch,timings}
    let newArray=[...users]
    newArray.splice(id,1,newData)
    setUsers(newArray)
    navigate('/dashbord')
  }
  
    let {id}=useParams()
    
  return <><div className='container-fluid'>
  <Form>
       <Form.Group className="mb-3" >
         <Form.Label>Name</Form.Label>
         <Form.Control type="text"value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3" >
         <Form.Label>Email</Form.Label>
         <Form.Control type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3" >
         <Form.Label>Mobile</Form.Label>
         <Form.Control type="text" value={mobile} placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3" >
         <Form.Label>Batch</Form.Label>
         <Form.Control type="text" value={batch} placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />
       </Form.Group>
 
       <Form.Group className="mb-3">
         <Form.Label>Session Timings</Form.Label>
         <Form.Select defaultValue={timings?timings:"0"} onChange={(e)=>setTimings(e.target.value)}>
           <option value="0" disabled>Session Timings</option>
           <option  value="10am to 12pm">10am to 12pm</option>
           <option  value="12pm to 2pm">12pm to 2pm</option>
           <option  value="2pm to 4pm">2pm to 4pm</option>
           <option  value="4pm to 6pm">4pm to 6pm</option>
           
         </Form.Select>
         </Form.Group>
       <Button variant="primary" onClick={()=>handleSubmit()}>
         Submit
       </Button>
     </Form>
   </div>
  
  </>
}

export default EditUser