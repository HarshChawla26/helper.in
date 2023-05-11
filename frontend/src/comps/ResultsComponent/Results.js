import React, { useContext, useEffect, useRef, useState } from 'react'
import './results.css'
import { toast } from "react-toastify";
import ResultCard from '../ResultCardComponent/ResultCard'
import resultcontext from '../../context/resultContext/resultcontext'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Results() {
    const loc = useRef()
    const [payload, setpayload] = useState([])
    const [show, setshow] = useState(false)
    const navigate = useNavigate()

    // eslint-disable-next-line
    const [location, setlocation] = useState(sessionStorage.getItem('location'))
    const result = useContext(resultcontext)
    
    useEffect(() => {
        setlocation(sessionStorage.getItem('location'))
        // eslint-disable-next-line
    }, [sessionStorage.getItem('location')])

    // useEffect(() => {
    //     if(!sessionStorage.getItem('location')){
    //         sessionStorage   
    //     }
    // }, [])
    
    
    useEffect(() => {
        result.setdata(JSON.parse(sessionStorage.getItem('data')))
        // eslint-disable-next-line
    }, [sessionStorage.getItem('data')])
    
    function handleinput(e){
        setlocation(e.target.value.toLowerCase());
    }

    
    async function handlesearch(e){
        
        if(sessionStorage.getItem('userID')&&sessionStorage.getItem('userID')!==''){
          result.fetchData(location);
          navigate(`/results?city=${location}`)
        }else{
            toast.warn("Session Expired!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
          navigate('/auth')
        }
      }
    
    useEffect(()=>{
        if(result.data&&result.data.length===0){
            if(sessionStorage.getItem('data')){ setpayload(JSON.parse(sessionStorage.getItem('data')))}
            setshow(true)
        }else{
            setshow(false)
            setpayload(result.data)     
        }
        // eslint-disable-next-line
    }, [result.data])
    
    
    if(show){
        return(
            <div className='wrapper'>
                <label>City :</label>
                <select id="search" onChange={handleinput} ref={loc}>
                    <option value=''> </option>
                    {result.cities.map((e,index)=>{
                        if(sessionStorage.getItem('location')&&sessionStorage.getItem('location').toLowerCase()===e.toLowerCase()){
                            return <option key={index} value={e} selected>{e}</option>
                        }
                        return <option key={index} value={e}>{e}</option>
                    })}
                </select>
                <Button variant="secondary" onClick={handlesearch}>Search</Button>
                <div className="BOX">
                    <div id='nothing'>No Results</div>
                </div>
            </div>
        )
    }
    return (
    <div className='wrapper'>
        <label>City :</label>
        <select id="search" onChange={handleinput} ref={loc}>
          <option value=''> </option>
          {result.cities&&result.cities.map((e,index)=>{
            if(sessionStorage.getItem('location').toLowerCase()===e.toLowerCase()){
                return <option key={index} value={e} selected>{e}</option>
            }
            return <option key={index} value={e}>{e}</option>
          })}
        </select>
        <Button variant="secondary" onClick={handlesearch}>Search</Button>
        <div className="BOX">
            
            {payload&&
                payload.map(e=>{
                    return <ResultCard key={e._id} id={e._id} name={e.name} desc={e.description} price={e.price} source={'/'} />
                })
            }
        </div>
        {/* <div id="next">
            <button>Next</button>
        </div>
        <div id="previous">
            <button>Next</button>
        </div>   */}
    </div>

  )
}
