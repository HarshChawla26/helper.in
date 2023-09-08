import { useState } from "react";
import ResultContext from './resultcontext'
const ResultState = (props)=>{
    const [data, setdata] = useState([]);
    const [cities, setcities] = useState([])

    async function fetchcities(){
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}services/allcities`);
        const respData = await response.json();
        setcities(respData)
    }

    async function fetchData(city){
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}services/city?city=${city}`);
        const respData = await response.json();
        setdata(respData)
        sessionStorage.setItem('location',city)
        await sessionStorage.setItem('data',JSON.stringify(respData))
    }
    return (
        <ResultContext.Provider value={{data,fetchData,setdata,fetchcities,cities}}>
            {props.children}
        </ResultContext.Provider>
    )
}

export default ResultState