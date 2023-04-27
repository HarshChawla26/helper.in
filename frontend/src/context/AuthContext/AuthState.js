import { useState } from "react"
import AuthContext from "./authContext"

const AuthState = (props)=>{
    const [user, setuser] = useState({})
    async function userLogin(data){
        const resp = await fetch('http://localhost:4000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const respData = await resp.json();
        setuser(respData)
        sessionStorage.setItem('userID',JSON.stringify(user.user._id))
    }
    async function userSignup(data){
        const resp = await fetch('http://localhost:4000/auth/signup',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const respData = await resp.json();
        setuser(respData)
        await console.log(respData)
        sessionStorage.setItem('userID',JSON.stringify(user.id))
    }
    return(
    <AuthContext.Provider value={{user,userLogin,userSignup}}>
        {props.children}
    </AuthContext.Provider>
    )
}
export default AuthState