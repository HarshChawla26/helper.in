import { useState } from "react";
import ResultContext from './resultcontext'
const ResultState = (props)=>{
    const [data, setdata] = useState([]);
    async function fetchData(city){
        const response = await fetch(`http://localhost:4000/services/${city}`);
        const respData = await response.json();
        setdata(respData)
        sessionStorage.setItem('location',city)
        await sessionStorage.setItem('data',JSON.stringify(respData))
    }
    return (
        <ResultContext.Provider value={{data,fetchData}}>
            {props.children}
        </ResultContext.Provider>
    )
}

export default ResultState