import { useState } from "react"
import AuthContext from "./authContext"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AuthState = (props)=>{
    const [user, setuser] = useState({})
    const nav = useNavigate()
    //Function that logouts the user
    async function userLogout(){
        setuser({});
        sessionStorage.setItem('userID','')
        sessionStorage.setItem('userType','')
        window.location.reload(false)
        await nav('/',{redirect:true})
    }

    // Function to Login the user with the provided form data
    async function userLogin(data){
        const resp = await fetch(`${process.env.REACT_APP_BASE_URL}auth/login`,{
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
            console.log(respData)
            await nav('/')
            setuser(respData.user)
            window.location.reload(false)
            sessionStorage.setItem('userID',respData.user._id)
            sessionStorage.setItem('userType',respData.user.role)
            toast.success("Login successfull!", {
                position: "bottom-right",
                acutoClose: 2000,
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
        const resp = await fetch(`${process.env.REACT_APP_BASE_URL}auth/signup`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const respData = await resp.json();
        if(respData.msg==='Technician registered'||respData.msg==='user registered'){
            toast.success("Signup successfull!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            await nav('/');
            setuser(respData.user)
            window.location.reload(false)
            sessionStorage.setItem('userID',respData.user._id)
            sessionStorage.setItem('userType',respData.user.role)
        }
    }

    async function deleteAccount(id){
        const resp = await fetch(`${process.env.REACT_APP_BASE_URL}auth/${id}/delete`,{
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