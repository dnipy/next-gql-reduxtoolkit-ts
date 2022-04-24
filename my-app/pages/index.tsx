import type { NextPage } from 'next'
import { useAppSelector } from '../hooks/reduxHooks'
import { selectAuth } from '../store/sliceses/authSlice'



const Home: NextPage = () => {
  const Auth = useAppSelector(selectAuth)

  return (
    <div>
      <h1>home page</h1>
      <br/>
      <hr/>
      <a href='/profile'>see profile</a>
      <br />
      <a href="/users">
        all users
      </a>
    </div>
  )
}

export default Home
