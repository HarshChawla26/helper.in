import React, { useContext, useEffect, useState } from 'react'
import './results.css'
import ResultCard from '../ResultCardComponent/ResultCard'
import resultcontext from '../../context/resultContext/resultcontext'
export default function Results() {
    const [payload, setpayload] = useState([])
    // eslint-disable-next-line
    const [location, setlocation] = useState(sessionStorage.getItem('location'))
    const result = useContext(resultcontext)
    useEffect(() => {
        setlocation(sessionStorage.getItem('location'))
        // eslint-disable-next-line
    }, [sessionStorage.getItem('location')])
    
    
    useEffect(()=>{
        if(result.data.length===0){
            setpayload(JSON.parse(sessionStorage.getItem('data')))
        }else{
            setpayload(result.data)
        }
    }, [result.data])

  return (
    <div className='wrapper'>
        <div className="BOX">
            {payload&&
                payload.map(e=>{
                    return <ResultCard key={e._id} name={e.name} desc={e.description} price={e.price} source={'/'} />
                })
            }
        </div>
        <div id="next">
            <button>Next</button>
        </div>
        <div id="previous">
            <button>Next</button>
        </div>  
    </div>

  )
}
