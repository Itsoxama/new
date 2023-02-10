import React from 'react'
import "./Home.css"
import { MdOutlineDashboard } from 'react-icons/md'
import { CgMediaLive } from 'react-icons/cg'
import { TbDeviceDesktopAnalytics, TbBriefcase, TbChartInfographic } from 'react-icons/tb'
import { AiTwotoneSecurityScan, AiOutlineMenuFold, AiOutlineLogout } from 'react-icons/ai'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FiCamera } from 'react-icons/fi'
import { BsClockHistory } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { VscNote } from 'react-icons/vsc'
import { BiFileBlank } from 'react-icons/bi'
import { useState } from 'react'
import {BiBuildingHouse} from 'react-icons/bi'
import Dashboard from './Dashboard'
import Users from './Users/Users'
import Presence from './Presence/Presence'
import Prod from './Productivity/Prod'
import Userdata from './Userdata/Userdata'
import {MdOutlineArrowForwardIos,MdOutlineArrowBackIosNew} from 'react-icons/md'
import Snapshot from './Snapshot/Snapshot'
import Apps from './App/App'
import Projects from './Projects/Projects'
import Track from './Track/Track'
import Reports from './Report/Report'
import Leave2 from './Leave/Leave2'
import Notes from './Notes/Notes'
import Emp from './Employeetype/Emp'
import Jobsite from './Jobsite/Jobsite'
import { useEffect } from 'react'
import Client from './Client/Client'
const Home = () => {
useEffect(() => {
  if(localStorage.getItem('userid')&&localStorage.getItem('userid').length>0){
if(localStorage.getItem('emptype')==='admin'){
    
}
else{

    window.location.pathname='/user'
}
  }
  else{
    window.location.pathname='/login'
  }

  return () => {
    
  }
}, [])
function logout(){
    localStorage.removeItem('userid')
    window.location.pathname='/login'
}

    const [i, seti] = useState(16)
    const [grp1, setgrp1] = useState('group1')
    const [grp2, setgrp2] = useState('group2')
    const [grp3, setgrp3] = useState('group2')
    function shsecond(){
        setgrp2('group1')
        setgrp3('group2')
        setgrp1('group2')
    }
    function shf(){
        setgrp2('group2')
        setgrp3('group2')
        setgrp1('group1')
    }
    
    function sht(){
        setgrp2('group2')
        setgrp3('group1')
        setgrp1('group2')
    }
    return (
        <div className="dashboard">
            <div className="left">
                <h1>Monitor</h1>
                <p className={grp1} onClick={e => seti(0)} > <MdOutlineDashboard className='iconj' /> <p>Dashboard</p></p>
                <p className={grp1} onClick={e => seti(1)}> <CgMediaLive className='iconj' /> <p>Live Stream</p></p>
                <p className={grp1} onClick={e => seti(2)}><TbDeviceDesktopAnalytics className='iconj' /> <p>Presence</p></p>
                
                <p className={grp1} onClick={e => seti(4)}> <AiTwotoneSecurityScan className='iconj' /> <p>Productivity</p></p>
                <p className={grp1} onClick={e => seti(5)} > <FaUserAlt className='iconj' /> <p>Staff</p></p>
                <p className={`${grp1} gri`} onClick={e => shsecond()} > <MdOutlineArrowForwardIos className='iconj' /> <p>Staff</p></p>


                <p className={`${grp2} gri`} onClick={e => shf()} > <MdOutlineArrowBackIosNew className='iconj' /> <p>Staff</p></p>
                <p className={grp2} onClick={e => seti(13)} > <BiBuildingHouse className='iconj' /> <p>Jobsite</p></p>
                <p className={grp2} onClick={e => seti(16)} > <FaUserAlt className='iconj' /> <p>Company</p></p>

                <p className={grp2} onClick={e => seti(6)}><FiCamera className='iconj'  /> <p>Snapshots</p></p>
                <p className={grp2} onClick={e => seti(7)}><VscNote className='iconj' /> <p>Applications</p></p>
                <p className={`${grp2} gri`} onClick={e => sht()} > <MdOutlineArrowForwardIos className='iconj' /> <p>Staff</p></p>

                <p className={`${grp3} gri`} onClick={e => shsecond()} > <MdOutlineArrowBackIosNew className='iconj' /> <p>Staff</p></p>
              
                <p className={grp3} onClick={e => seti(8)}> <TbBriefcase className='iconj' /> <p>Projects</p></p>
                <p className={grp3}  onClick={e => seti(9)}> <BiFileBlank className='iconj' /><p>GPS Location</p></p>
                <p className={grp3} onClick={e => seti(11)}><AiOutlineMenuFold className='iconj' /><p>Leave</p></p>
                <p className={grp3} onClick={e => seti(12)}> <BiFileBlank className='iconj' /><p>Notes</p></p>
               
                <p className={grp3} onClick={e => seti(10)}><BsClockHistory className='iconj' /><p>Reports</p></p>
                <p className='grts' onClick={e=>logout()}><AiOutlineLogout className='iconj' /><p>Logout</p></p>


            </div>
            <div className="right">
                {
                    i === 0 &&
                    <Dashboard />

                }{i === 1 &&
                    <Users />

                }
                {i === 2 &&
                    <Presence />

                }
                {i === 4 &&
                    <Prod />

                }{
                    i === 5 &&
                    <Emp />
                }
                {i===6&&
                <Snapshot />

                }
                  {i===7&&
                <Apps />

                }
                {i===8&&
                <Projects />

                }
                {i===9&&
                <Track />

                }
                  {i===10&&
                <Reports />

                }
                {i===11&&
                <Leave2 />

                }
                {i===12&&
                <Notes />
                

                }
                 {i===13&&
                <Jobsite />
                

                }
                {i===16&&
               <Client />
               

               }


            </div>
        </div>
    )
}

export default Home