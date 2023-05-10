import React, {  useEffect, useState } from 'react'
import { Navigate, Route, Routes } from "react-router";
import { Link } from 'react-router-dom'
import './profile.css'
import PersonalInfo from './PersonalInfo'
import Services from './Services'
// import AuthContext from "./../../context/AuthContext/authContext"
export default function Profile() {
    // const usercon = useContext(AuthContext)
    const [data, setdata] = useState({})
    useEffect(() => {
        // console.log(sessionStorage.getItem('userID').toString())
        async function getuser(){
            const response = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}`)
            const respData = await response.json();
            setdata(respData)
        }
        getuser()
    }, [])
    
  return (
    <div>
        <div id="bar">
            <div id="leftbar">
                <Link className="left" to='/profile/info'>Personal Information</Link>
                <hr className="line"/>

                <Link className="left" to='/profile/services'>Your Orders</Link>
                <hr className="line"/>
            </div>

            <div id="rightbar">
                <Routes>
                    <Route path='/info' element={<PersonalInfo key={data._id} id={data._id} name={data.name} email={data.email} phone={data.phone} address={data.address} />}></Route>
                    <Route path='/services' element={<Services/>}></Route>
                    <Route path='*' element={<Navigate to='./info'/>}></Route>
                </Routes>
            </div>
        </div>
    </div>

  )
}
