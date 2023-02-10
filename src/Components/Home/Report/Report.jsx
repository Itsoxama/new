import React from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'


import as from '../../../images/219983.png'

const Reports = () => {
var data=[{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},{
    name:"Usama",
    img:as,
    wt:'22:55',
    it:'36:12',
    pt:"35%",
    status:'active'

},
]

    return (
        <div className="prodi ghbtn">
            <div className="prodiheader">

                <GiEnergyArrow className='ene' />
                <h1>Timesheets and Report</h1>
                <div className="spanicon">
                    <AiOutlineReload className='relo' />

                </div>


            </div>
            <div className="prodiheader prodiko">

                <h1>Duration</h1>
               <div className="chkbox">
                <input type="radio" />
                
                <p>Daily</p>
                <input type="radio" />
                <p>Weekly</p>
                <input type="radio" />
                <p>Monthly</p>
                <input type="radio" />
                <p>Yearly</p>
               </div>


            </div>
            <div className="prodiheader prodiko">

<h1>Attendence</h1>
<div className="chkbox">
<input type="checkbox" />

<p>Present</p>
<input type="checkbox" />
<p>Absent</p>
<input type="checkbox" />
<p>Leaves</p>
</div>


</div>
    <div className="prodiheader prodiko">

<h1>Users</h1>
<div className="chkbox">
<input type="checkbox" />

<p>All</p>
<input type="checkbox" />
<p>Active</p>
<input type="checkbox" />
<p>Productive</p>

<input type="checkbox" />
<p>Inactive</p>
</div>


</div>
           
            <div className="prodiheader prodiko">

<h1>Time</h1>
<div className="chkbox">
<input type="checkbox" />

<p>Idle Time</p>
<input type="checkbox" />
<p>Productive Time</p>
<input type="checkbox" />
<p>Total Time</p>
</div>


</div>
<div className="prodiheader prodiko">

<h1>App Usage</h1>
<div className="chkbox">
<input type="checkbox" />

<p>Social Media</p>
<input type="checkbox" />
<p>Microsoft Word</p>
<input type="checkbox" />
<p>Microsoft Excel</p>
</div>


</div>

<div className="prodiheader prodiko">

<h1>Projects</h1>
<div className="chkbox">
<input type="checkbox" />

<p>Completed</p>
<input type="checkbox" />
<p>Active</p>

</div>


</div>
<button>Generate</button>



        </div>
    )
}

export default Reports