import { gql } from "@apollo/client";

export const MUT_CREATE = gql`
    mutation($name:String!, $username:String! , $email:String!){
        createUser(input:{name :$name , username:$username , email:$email}){
            name
            username
            email
        }
    }
`