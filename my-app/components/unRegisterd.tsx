import { useMutation } from "@apollo/client"
import { ChangeEvent, FC, MouseEvent } from "react"
import { useState } from "react"
import { MUT_CREATE } from "../gql/MUT_CREATE"
import { useAppDispatch,useAppSelector } from "../hooks/reduxHooks"
import { setAuthed ,setUserName} from "../store/sliceses/authSlice"
import {selectAuth} from '../store/sliceses/authSlice'




const UnRegisterd : FC =()=>{


    const [name,setName] = useState<string>('')
    const [username,setUName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [addTodo, { data, loading, error }] = useMutation(MUT_CREATE);
    const dispatch = useAppDispatch()
    const nameOfUser = useAppSelector(selectAuth)

    if(error) console.log(error);
    if(data ) console.log(data);
    


    function handleSubmit (e:MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if (name && username && email){
            addTodo({variables:{
                name ,
                username,
                email
            }}).then((status)=>{
                const theuser = status.data?.createUser
                dispatch(setAuthed(true))
                dispatch(setUserName(theuser.username))

            })
        }
        else{
            
            alert('fill!')
        }
    }


    return(
        <div>
            <h1>you are not registerd!</h1>
            <h6>register first!</h6>
            <hr />
            
                <input type="text" value={name} placeholder='name' onChange={
                    (e:ChangeEvent<HTMLInputElement>)=>{
                        setName(e.target.value)
                    }
                }/>
                <br/>
                <input type="text" value={username} placeholder='username' onChange={
                    (e:ChangeEvent<HTMLInputElement>)=>{
                        setUName(e.target.value)
                    }
                }/>
                <br/>
                <input type="text" value={email} placeholder='email' onChange={
                    (e:ChangeEvent<HTMLInputElement>)=>{
                        setEmail(e.target.value)
                    }
                }/>
                <br/>
                <button type="submit" onClick={handleSubmit} >ok</button>
        

        </div>
    )
}


export default UnRegisterd