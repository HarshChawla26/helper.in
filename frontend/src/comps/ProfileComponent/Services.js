import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'
export default function Services() {
  const [data, setdata] = useState([])

  async function getServices(){
    const resp = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/services`)
    const respData = await resp.json()
    await setdata(respData.services)
    await console.log(data)
  }
  useEffect(() => {
    getServices();
    
     // eslint-disable-next-line
  }, [])

  const cancelOrder = async(id)=>{
    const response = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/service/${id}`,{method:'DELETE'})
    const resp = await response.json()
    getServices()
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
      <div className="empty-01">
        <h2>Nothing to show</h2>
        <img
          width={"200px"}
          height={"200px"}
          src={require("../../Assets/shopping-cart.png")}
          alt="Technician.png"
        />
      </div>
    );
  }
  return (
    <div id="mainbox1">
      {data&&data.map((e)=>{
        // console.log(e)
        return (
          <div className="service-box">
            <img src={e.img} className='service-box-img' alt='src'/>
            <div className="booknow">
              <h4>Sevice Details</h4>
              <table>
                <tr>
                  <td>₹ {e.price}</td>
                </tr>
                <tr>
                  <td>{e.name}</td>
                </tr>
                <tr>
                  <td>{e.date}</td>
                </tr>
                <tr>
                  <td>{e.time}</td>
                </tr>
                <tr>
                  <td>{e.status}</td>
                </tr>
              </table>
              <button
                onClick={() => {
                  cancelOrder(e.id);
                }}
                className="delete-btn-sc"
              >
                {" "}
                Cancel{" "}
              </button>
            </div>
          </div>
        );
      })}
          
      </div>
  )
}
