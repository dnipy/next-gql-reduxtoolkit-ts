import { FC } from "react"
import { useAppSelector } from "../hooks/reduxHooks"
import { selectAuth } from "../store/sliceses/authSlice"


const Registerd : FC =()=>{
    const Auth = useAppSelector(selectAuth)
    return(
        <div>
            
            <h1>you are registerd!</h1>
            <h3>this was the surprixe ha ha ha 0_0</h3>
            
            <h5> you are {Auth.username}</h5> 
            <a href="/">go to home to see the hidden component!!!!</a>
        </div>
    )
}

export default Registerd