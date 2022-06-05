import React, {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom";
import {UserAuth} from "../components/AuthContext"

export const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const {signIn} = UserAuth()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await signIn(email, password)
            navigate("/account")
        }
        catch (error){
            setError(error.message)
            console.error(error.message)
        }
    }
    return(
        <>
            <h2>Sign in</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email 
                    <input type="email" onChange={(e) => setEmail(e.target.value) } />
                </label>
                <label htmlFor="pwd">Password
                    <input type="string" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}