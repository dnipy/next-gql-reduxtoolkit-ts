import { NextPage } from "next"
import Registerd from "../components/registerd"
import TopAuth from "../components/topAuth"
import UnRegisterd from "../components/unRegisterd"
import { useAppSelector } from "../hooks/reduxHooks"
import  { selectAuth } from "../store/sliceses/authSlice"


const Profile : NextPage = ()=>{
    const Auth = useAppSelector(selectAuth)
    return (
        <div>
            <h1>profile page</h1>
            <br/>
            <TopAuth/>
            <hr/>
            <div>
                {Auth.isAuthed ? <Registerd/> : <UnRegisterd/>}
            </div>
        </div>
    )
}






export default Profile