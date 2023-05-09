import React, { useEffect, useState } from 'react'

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
              </div>
          </div>
        )
      })}
          
      </div>
  )
}
