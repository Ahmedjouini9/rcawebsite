import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sideBar/sideBar'
import Feed from '../../components/feed/feed'
import './companys.css'

export default function companys() {
  return (
    <div>
       <Navbar />
       <div className='container'>

       <Sidebar />
       <Feed />
       </div>
    </div>
  )
}
