import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function NestedExample() {
  return <div style={{display:"flex", flexDirection:"column"}}>
    <div>
      <h2>This is an example of Nested Routing </h2>
    </div>
    <div>
    <ul>
      <Link to='profile'>
      <li>profile</li>
      </Link>
      <Link to='accounts'>
      <li>Accounts</li>
      </Link>
      <Link to='/nested-example'>
      <li>Nested Home</li>
      </Link>
    </ul>
  </div>
  <Outlet/>
  </div>
}

export default NestedExample