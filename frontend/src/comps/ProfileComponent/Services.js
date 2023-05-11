import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'
export default function Services() {
  const [data, setdata] = useState([])

  useEffect(() => {
    async function getServices(){
      const resp = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/services`)
      const respData = await resp.json()
      await setdata(respData.services)
      await console.log(data)
    }
    getServices();
    
     // eslint-disable-next-line
  }, [])

  const cancelOrder = async(id)=>{
    const response = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/service/${id}`,{method:'DELETE'})
    const resp = await response.json()
    if(resp.msg==='service deleted'){
      toast.success('Service cancelled', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }

  
  if(data&&data.length===0){
    return (
      <h2 className='nothing'>Nothing to show</h2>
    )
  }
  return (
    <div id="mainbox1">
      {data&&data.map((e)=>{
        // console.log(e)
        return (
          <div className="service-box">
                  {/* <img src="booknow.jpg" height="50vh" width="100vw"/> */}
              <div className="booknow">
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                  <p>{e.date}</p>
                  <p>{e.time}</p>
                  <Button onClick={()=>{cancelOrder(e.id)}} className='delete-btn' variant='danger'> Cancel </Button>
              </div>
          </div>
        )
      })}
          
      </div>
  )
}
