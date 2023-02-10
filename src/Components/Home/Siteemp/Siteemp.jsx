import React, { useState } from 'react'
import { GiEnergyArrow } from 'react-icons/gi'
import { RiLightbulbFlashLine, RiTimerFlashFill } from 'react-icons/ri'
import { BiTime } from 'react-icons/bi'
import { MdSnooze } from 'react-icons/md'
import { AiOutlineReload } from 'react-icons/ai'
import axios from 'axios'
import { useEffect } from 'react'
import { tz } from '../../apis'

import {AiFillDelete} from 'react-icons/ai'
import XLSX from 'sheetjs-style'
import jsPDF from 'jspdf';
import * as file from 'file-saver'
const Siteemp = () => {

const [adduser, setadduser] = useState('adduser2')
const [i, seti] = useState(0)
const [taxes, settaxes] = useState('taxes')
const [circle, setcircle] = useState('circle')
const [is, setis] = useState(0)


const [taxes2, settaxes2] = useState('taxes')
const [circle2, setcircle2] = useState('circle')
const [is2, setis2] = useState(0)


const [taxes3, settaxes3] = useState('taxes')
const [circle3, setcircle3] = useState('circle')
const [is3, setis3] = useState(0)



const [data, setdata] = useState()

const [itin, setitin] = useState('')
const [address, setaddress] = useState('')
const [status, setstatus] = useState('Active')
const [phone, setphone] = useState('')
const [client, setclient] = useState('')
const [skildata, setskildata] = useState()
useEffect(() => {
  axios.get(`${tz}/siteuser/getall`).then(res=>{
    console.log(res)
    setdata(res.data.Siteuserd)
  })
   axios.get(`${tz}/skills/getall`).then(res=>{
    console.log(res)
    setskildata(res.data.Skillsdata)
  })

  return () => {
    
  }
}, [])

var cstyl2=
{		border: {
    right: {
        style: "thin",
        color: "000000"
    },
    left: {
        style: "thin",
        color: "000000"
    },
    bottom: {
        style: "thin",
        color: "000000"
    },
    top: {
        style: "thin",
        color: "000000"
    },
},
    font: {
        name: "arial",
        bold: true,
        sz:10
    },
    alignment: {
        vertical: "center",
        horizontal: "center",
    },	
    numFmt: "$#,###.00"
};
function req() {
  

    if(actiontype==='update'){
        axios.post(`${tz}/siteuser/update`,{
            name:name,
            nc:nc,
            taxas:taxas,
            skill:skill,
            pr:pr,
           otpr:parseInt(pr)+parseInt(pr)/2,
            jobn:jobn,
            phone:phone,
            address:address,
            itin:itin,
            status:status,
            client:client,
            _id:idb,
            idno:idno
    
    
    
        }).then(res=>{  
            axios.get(`${tz}/siteuser/getall`).then(res=>{
                console.log(res)
                setdata(res.data.Siteuserd)
                setadduser('adduser2')
              })
        })
    }
    else{
        axios.post(`${tz}/siteuser/add`,{
            name:name,
            nc:nc,
            taxes:taxas,
            skill:skill,
            payrate:pr,
            otpayrate:parseInt(pr)+parseInt(pr)/2,
            jobn:jobn,
            phone:phone,
            address:address,
            itin:itin,
            status:status,
            client:client,
            idno:idno
    
    
    
        }).then(res=>{  
            axios.get(`${tz}/siteuser/getall`).then(res=>{
                console.log(res)
                setdata(res.data.Siteuserd)
                setadduser('adduser2')
              })
        })
        
    
    }
}

function turnon() {
    if(is===0){
        settaxas('yes')

        setcircle('circle2')
        settaxes('taxes2')
        setis(1)
    }
    else{
        
        settaxas('no')

        setcircle('circle')
        settaxes('taxes')
        setis(0)
    }
    
}
function turnon2() {
    if(is2===0){
        setnc('4')

        setcircle2('circle2')
        settaxes2('taxes2')
        setis2(1)
    }
    else{
        
        setcircle2('circle')
        settaxes2('taxes')
        setis2(0)
        
        setnc('no')
    }
    
}
function turnon3() {
    if(is3===0){
        alert('active')
        setstatus('Active')

        setcircle3('circle2')
        settaxes3('taxes2')
        setis3(1)
    }
    else{
        
        alert('inactivecall')
        setcircle3('circle')
        settaxes3('taxes')
        setis3(0)
        
        setstatus('Inactive')
    }
    
}

const [name, setname] = useState('')
const [skill, setskill] = useState('')
const [jobn, setjobn] = useState('')
const [nc, setnc] = useState('')
const [taxas, settaxas] = useState('')
const [pr, setpr] = useState('')
const [otpr, setotpr] = useState('')
const [ids, setids] = useState('')
function deleteuser() {
    console.log(ids)
    var r=ids.split('4sd')
    r[r.length-1]= r[r.length-2]
    setdata()
    axios.post(`${tz}/siteuser/delete`,{
      ids:r



    }).then(res=>{  
        console.log(res)
        setids('')
        axios.get(`${tz}/siteuser/getall`).then(res2=>{
            console.log(res2)
            setdata(res2.data.Siteuserd)
            setadduser('adduser2')
          })
    })
    
}
const [actiontype, setactiontype] = useState('edit')
const [clients, setclients] = useState()
useEffect(() => {
    axios.get(`${tz}/client/getall`).then(res=>{
        console.log(res)
        setclients(res.data.Client)
    })

  return () => {
    
  }
}, [])
function updateuser() {
    setactiontype('update')
    setadduser('adduser')
    var idx=ids.split('4sd')
    data.forEach(val => {
        if(val._id===idx[0]){
            setname(val.name)
            setclient(val.client)
            setskill(val.skill)
            setpr(val.payrate)
            setaddress(val.address)
            setphone(val.phone)
            setitin(val.itin)
            setstatus(val.status)
            setidb(val._id)
            setnc(val.nc)
            settaxas(val.taxes)
            if(val.nc==='4'){
                setnc('4')
        
                setcircle2('circle2')
                settaxes2('taxes2')
                setis2(1)
            }
            else{
                
                setcircle2('circle')
                settaxes2('taxes')
                setis2(0)
                
                setnc('no')
            }
            if(val.taxes==='yes'){
                settaxas('yes')
        
                setcircle('circle2')
                settaxes('taxes2')
                setis(1)
            }
            else{
                
                settaxas('no')
        
                setcircle('circle')
                settaxes('taxes')
                setis(0)
            }
          
        }
        
    });

    
}
 var styl1=
    {		border: {
        right: {
            style: "thin",
            color: "000000"
        },
        left: {
            style: "thin",
            color: "000000"
        },
        bottom: {
            style: "thin",
            color: "000000"
        },
        top: {
            style: "thin",
            color: "000000"
        },
    },
        font: {
            name: "arial",
            bold: true,
            sz:10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },							// set the style for target cell
        fill: {
            fgColor: {
                
                theme: 8,
                tint: 0.3999755851924192,
                rgb: '9CCEB8'
            }
        },
    };
    var styl2=
    {		border: {
        right: {
            style: "thin",
            color: "000000"
        },
        left: {
            style: "thin",
            color: "000000"
        },
        bottom: {
            style: "thin",
            color: "000000"
        },
        top: {
            style: "thin",
            color: "000000"
        },
    },
        font: {
            name: "arial",
            bold: true,
            sz:10
        },
        alignment: {
            vertical: "center",
            horizontal: "center",
        },	
    };
    const [prdata, setprdata] = useState([])

    const [arr, setarr] = useState([])
    function prepare() {
        setarr([])
        data.forEach((val,index) => {
            
            console.log(arr)
          if(ids.search(val._id)>=0){
            setarr(arrr=>[...arrr,{    
                name:val.name,
                nc:val.nc,
                taxes:val.taxes,
                skill:val.skill,
                payrate:val.payrate,
                otpayrate:val.otpayrate,
                phone:val.phone,
                address:val.address,
                itin:val.itin,
                status:val.status,
                client:val.client
                
            }])
          }
           
        })
        
    }

function exports() {
    console.log(arr)
    const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
    var ext = '.xlsx'
      
                
            const myHeader = ["name","client","skill",'address','phone','payrate','otpayrate','nc','taxes','itin','status'];
                 
            const ws = XLSX.utils.json_to_sheet(arr,{header:myHeader})
            
             var wscols = [
                { wch: 15 },
                 { wch: 25 },
                 { wch: 20 },
                 { wch: 20 },
                 { wch: 15 },
                 { wch: 7 },
                 { wch: 8 },
                 { wch: 10 },
                 { wch: 7 },
                 { wch: 8 },
                 { wch: 12 },
             ];
             for(var k=0;k<arr.length+1;k++ ){
                 if(k===0){
                     
             ws[`B${k+1}`].s = styl1
             ws[`A${k+1}`].s= styl1
             ws[`C${k+1}`].s= styl1        
             ws[`D${k+1}`].s= styl1
             ws[`E${k+1}`].s= styl1
             ws[`F${k+1}`].s= styl1
             ws[`G${k+1}`].s= styl1
             ws[`H${k+1}`].s= styl1
             ws[`I${k+1}`].s= styl1
             ws[`J${k+1}`].s= styl1
             ws[`K${k+1}`].s= styl1
                 }
                 else{
                     
             ws[`B${k+1}`].s = styl2
             ws[`A${k+1}`].s= styl2
             ws[`C${k+1}`].s= styl2        
             ws[`D${k+1}`].s= styl2
             ws[`E${k+1}`].s= styl2
             ws[`F${k+1}`].s= cstyl2
             ws[`G${k+1}`].s= styl2
             ws[`H${k+1}`].s=  cstyl2
             ws[`I${k+1}`].s= styl2
             ws[`J${k+1}`].s= styl2
             ws[`K${k+1}`].s= styl2
            
                 }
             }
            
            
            
            
             ws['!cols'] = wscols;
             const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
             const excelbuffer = XLSX.write(wb, { booktype: 'xlsx', type: 'array' })
             const dar = new Blob([excelbuffer], { type: filetype })
             file.saveAs(dar, 'asd.xlsx',)
            setarr([])
            
                        

}
const [idb, setidb] = useState('')
function closewin() {
    setadduser('adduser2')
    setactiontype('edit')
    
}
const [o, seto] = useState(0)
function addskills(){
    axios.post(`${tz}/skills/add`,{
        name:skillname,



    }).then(res=>{  
        axios.get(`${tz}/skills/getall`).then(res=>{
           setskildata(res.data.Skillsdata)
          })
    })
    
}
function fillall(){
    console.log(ids)
    if(o===0){
        setarr([])
        seto(1)
        setids('')
        data.forEach(elem => {
            setids(ids=>ids+elem._id+'4sd')
            setarr(arrr=>[...arrr,{    
                name:elem.name,
                nc:elem.nc,
                taxes:elem.taxes,
                skill:elem.skill,
                payrate:elem.payrate,
                otpayrate:elem.otpayrate,
                phone:elem.phone,
                address:elem.address,
                itin:elem.itin,
                status:elem.status,
                client:elem.client
                
            }])
        });
    }
    else{
        setarr([])
        setids('')
        seto(0)

    }

}
const [idno, setidno] = useState('')
const [aduser, setaduser] = useState('adduser2')
const [skillname, setskillname] = useState('')
function deleteskill(val) {
    axios.post(`${tz}/skills/delete`,{
        id:val,



    }).then(res=>{  
        axios.get(`${tz}/skills/getall`).then(res=>{
           setskildata(res.data.Skillsdata)
          })
    })
}
function openskil(){
    setaduser('adduser')
}
  return (
    <>
    {i===0&&
<>
<div className={aduser}>
<div className="subadduser">
    <div className="addskill">
        
    <div className="inputname">
                    <input  onChange={e=>setskillname(e.target.value)}  type="text" />

                </div>
        <button className='man' onClick={e=>addskills()}>
            Add Skill
        </button>

        <button className='manb man' onClick={e=>setaduser('adduser2')}>
            Cancel
        </button>


        
    </div>
  <div className="ptabled">
  <div className="tabled">
        <div className="headerd">
            Skills

        </div>
        <div className="headerr">
            {skildata&&skildata.map((val)=>(
                <h1>{val.name} <AiFillDelete onClick={e=>deleteskill(val._id)} className='deletebin' /> </h1>
            ))

            }
        </div>


    </div>
  </div>

</div>
</div>
<div className={adduser}>
            <div className="subadduser">
              
              <>
                <div className="inputname">
                    <h1>Name</h1>
                    <input value={name} onChange={e=>setname(e.target.value)}  type="text" />

                </div>
                
                <div className="inputname">
                    <h1>Id no.</h1>
                    <input value={idno} onChange={e=>setidno(e.target.value)}   type="text" />

                </div>

                <div className="inputname">
                    <h1>Company</h1>
                    



<select name="cars" id="cars" value={client} onChange={e=>setclient(e.target.value)}>

  {
    clients&&clients.map(val=>(
        <option value={val.username}>{val.username}</option>
    ))
  }
</select>



                </div>
                <div className="inputname">
                    <h1>Skill</h1>
                    
<select name="cars" id="cars" value={skill} onChange={e=>setskill(e.target.value)}>

    {
        skildata&&skildata.map(val=>(
            <>
            
  <option value={val.name}>{val.name}</option>
            </>
        ))
    }
</select>



                </div> <div className="inputname">
                    <h1>Status</h1>
                    
<select name="cars" id="cars" value={status} onChange={e=>setstatus(e.target.value)}>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>



                </div>
                <div className="inputname">
                    <h1>Pay rate (per/hr)</h1>
                    <input value={pr}   type="number" onChange={e=>setpr(e.target.value)} />

                </div>
                
                <div className="inputname">
                    <h1>OT Pay rate (per/hr)</h1>
                    <input  value={pr&&parseInt(pr)+parseInt(pr)/2}   type="number" onChange={e=>setotpr(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Address</h1>
                    <input  value={address} type="text" onChange={e=>setaddress(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>Phone:</h1>
                    <input  value={phone} type="text" onChange={e=>setphone(e.target.value)} />

                </div>
                <div className="inputname">
                    <h1>ITIN/SSN</h1>
                    <input  value={itin} type="text" onChange={e=>setitin(e.target.value)} />

                </div>

                <div className="inputname">
                    <h1>Taxes:  </h1>
                    <div className={taxes} onClick={e=>turnon()}>
                        <div className={circle}>

                        </div>
                    </div>

                </div>
                <div className="inputname">
                    <h1>NC (4%):  </h1>
                    <div className={taxes2} onClick={e=>turnon2()}>
                        <div className={circle2}>

                        </div>
                    </div>

                </div> 
                
                <div className="inputname"></div>
                <button onClick={e=>req()}  className='btn1'>Submit</button>
                <button onClick={e=>closewin()}  className='btn2'>Cancel</button>

              </>

              


            </div>

        </div>
</>

}
    <div className="sitemap">
         <div className="prodiheader">

<GiEnergyArrow className='ene' />
<h1>Site Staff</h1>
<button className='addemp' onClick={e=>setadduser('adduser')} >+ Add Staff</button>

<button className='addemp' onClick={e=>exports()} >Generate Report</button>
<button className='addemp' onClick={e=>prepare()} >Prepare Report</button>
<button className='addemp' onClick={e=>openskil()} >Skills</button>

<div className="endbuttons" >
    {ids&&ids.split('4sd').length<=2&&
    
<button className='addemp  addemp2' onClick={e=>updateuser()} >Update</button>

    }

<button className='addemp addemp3' onClick={e=>deleteuser()} >Delete</button>
</div>




</div>
<div className="tablerow">
              <div className="subtable">
              <div className="headertable clop">
                <span className='sxx'><input type="checkbox" checked={o===1} onClick={e=>fillall() }/> </span>
                
                <h4 style={{width:"40px"}}>No.</h4>
              
              
              <h2 style={{paddingLeft:'5px'}}>Staff</h2>
                    <h1>Address</h1>
                    
                    <h6>Skill</h6>
                    
                    <h6>Company</h6>
                    <h3 style={{width:"70px"}}>Taxes</h3>
                    <h4 style={{width:"70px"}}>Pay rate</h4>
                    <h5 style={{width:"100px"}}>OT Pay rate</h5>

                    
                    <h4 style={{width:"70px"}}>Status</h4>
                    <h6>Phone</h6>
                    <h6>ITIN/SSN</h6>
                    <h5 style={{width:"70px"}}>NC(%)</h5>


                </div>
                {data&&data.map(val=>(
                    <>
                     <div className="headertable">
                     <span className='sxx'> <input type="checkbox"  checked={ids.search(val._id)>=0} onClick={e=>ids.search(val._id)>=0?setids(ids.replace(val._id+'4sd','')):setids(ids+val._id+'4sd')} /> </span>
                     
                    <h4 style={{width:"40px"}}>{val.idno}</h4>      
                    <h2 style={{marginLeft:'5px'}}>{val.name}</h2>
                    <h1> {val.address}</h1>
                    
                    <h6 >{val.skill}</h6>
                    
                    <h6>{val.client}</h6>
                    <h3 style={{width:"70px"}} >{val.taxes}</h3>
                    <h4 style={{width:"70px"}} >{val.payrate}</h4>
                    <h5 style={{width:"100px"}} >{val.otpayrate}</h5>
                    
                    <h4 style={{width:"70px"}}>{val.status}</h4>
                    <h6>{val.phone}</h6>
                    <h6>{val.itin}</h6>
                    {
                        val.nc!=='no'?

                        <h5 style={{width:"70px"}}>{val.nc}%</h5>
                        :

                        <h5 style={{width:"70px"}}>NO</h5>
                    }


                </div>
                    </>
                ))

                }
              </div>
            </div>

    </div></>
  )
}

export default Siteemp