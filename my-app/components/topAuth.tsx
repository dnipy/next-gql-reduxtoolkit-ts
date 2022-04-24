import { useAppSelector } from '../hooks/reduxHooks'
import { selectAuth } from '../store/sliceses/authSlice'

export default function () {
  const auth = useAppSelector(selectAuth)
    return(
        <div>
        <h6>is authed? : {auth.isAuthed?'yes':'no'} </h6>
        <h6>username : {auth.username ? auth.username : 'none'}</h6>
        </div>
    )
}