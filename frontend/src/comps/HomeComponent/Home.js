import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './home.css'
import resultcontext from '../../context/resultContext/resultcontext';

export default function Home() {
  const [search, setsearch] = useState('')
  const navigate = useNavigate()
  const result = useContext(resultcontext);

  function handleinput(e){
    setsearch(e.target.value);
  }
  async function handlesearch(e){
    e.preventDefault()
    result.fetchData(search);
    navigate('/results')
  }

  useEffect(() => {
  }, [])
  
  return (
    <div>

      <div className="container">
          <h1>NAMASTE</h1>
          <p>Services, on demand</p>
      
      <form >
        <input type="text" id="search" onChange={handleinput} value={search} placeholder="Search for services"></input>
        <button onClick={handlesearch} className='btn btn-primary'>Search</button>
      </form>
      </div>
    </div>
  )
}
