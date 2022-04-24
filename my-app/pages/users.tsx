import { NextPage } from "next"
import { GET_ALL_USERS } from "../gql/GET_USERS"
import { aClient } from "../lib/apolloClient"


const Users: NextPage = ({data} :any) => {


    return(
        <div>

            <h1> All users</h1>
            <hr />
            <div>
                <h3>name == username</h3>
                <ul>

                    {data.users.data.map((u : any)=>{
                        return (
                            
                            <li>
                                {u.name}  ==  {u.username}
                            </li>
                        )
                    })}
                    
                </ul>
            </div>
        </div>
    )
    
    
}

export async function getStaticProps() {
    const {data} = await aClient.query({
        query : GET_ALL_USERS
    })
    return { 
      props: {
          data :  data
      },
    }
  }
  
  

export default Users