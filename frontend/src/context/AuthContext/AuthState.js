import { useState } from "react"
import AuthContext from "./authContext"

const AuthState = (props)=>{
    const [user, setuser] = useState('')
    function fetchUser(){
        
    }
    return(
    <AuthContext.Provider value={{user,fetchUser}}>
        {props.children}
    </AuthContext.Provider>
    )
}
export default AuthState