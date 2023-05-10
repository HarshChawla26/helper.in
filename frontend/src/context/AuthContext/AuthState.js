import { useState } from "react"
import AuthContext from "./authContext"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AuthState = (props)=>{
    const [user, setuser] = useState({})
    const nav = useNavigate()
    //Function that logouts the user
    function userLogout(){
        setuser({});
        sessionStorage.setItem('userID','')
        nav('/',{redirect:true})
    }

    // Function to Login the user with the provided form data
    async function userLogin(data){
        const resp = await fetch('http://localhost:4000/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const respData = await resp.json();
        if(respData.msg){
            toast.error(`${respData.msg}`, {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })
            return;
        }else{
            await nav('/')
            setuser(respData.user)
            sessionStorage.setItem('userID',respData.user)
            toast.success("Login successfull!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
        }
    }
    // Function to create a new user with the provided form data
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
        await sessionStorage.setItem('userID',respData.id)
    }

    async function deleteAccount(id){
        const resp = await fetch(`http://localhost:4000/auth/${id}/delete`,{
            method:'DELETE'
        })
        await resp.json()
        await userLogout()
    }

    return(
    <AuthContext.Provider value={{user,userLogin,userSignup,userLogout,deleteAccount}}>
        {props.children}
    </AuthContext.Provider>
    )
}
export default AuthState