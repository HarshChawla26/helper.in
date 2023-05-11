import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './home.css'
import Button from 'react-bootstrap/Button'
import resultcontext from '../../context/resultContext/resultcontext';

export default function Home() {
  const [search, setsearch] = useState('')
  const navigate = useNavigate()
  const result = useContext(resultcontext);

  function handleinput(e){
    setsearch(e.target.value.toLowerCase());
  }

  useEffect(() => {
    result.fetchcities()
  }, [result])
  
  async function handlesearch(e){
    e.preventDefault()
    if(sessionStorage.getItem('userID')&&sessionStorage.getItem('userID')!==''){
      result.fetchData(search);
      sessionStorage.setItem('location',search)
      navigate(`/results?city=${search}`)
    }else{
      navigate('/auth')
    }
  }

  useEffect(() => {
  }, [])
  
  return (
    <div>
      <div className="mycontainer">
        <center>
          <h1 id='namaste-h1'>NAMASTE</h1>
          <p>Services, on demand</p>
        </center>
      <form >
        <select id="search" onChange={handleinput}>
          <option value='' defaultValue> </option>
          {result.cities.map((e,index)=>{
            return <option key={index} value={e}>{e}</option>
          })}
        </select>
        <Button onClick={handlesearch} variant={'dark'} id='home-search-button'>Search</Button>
      </form>
      </div>
    </div>
  )
}
