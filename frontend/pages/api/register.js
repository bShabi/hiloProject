import cookie from 'cookie'
import { API_URL } from '@/config/index'
import axios from 'axios'

export default async (req, res) => {
    if (req.method === 'POST') {

        const { FullName, Email, Password, Username, isMentor, Graduation, Degree, isStudent } = req.body


        // Create User in Collection Type { User}

        const graphqlQuery = {
            query: `mutation register($email: String! , $username: String!, $password: String!) {
                    register(input: {email: $email, username: $username , password: $password}) {
                        user {id,username,email},jwt
                    }
                }
                  `,
            variables: {
                email: Email,
                password: Password,
                username: Username,
            }
        }
        const postUser = await fetch(`${API_URL}/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(graphqlQuery),
        })
        // End Section Create User
        const postUserData = await postUser.json()


        // Create User in Collection Type { Students}

        const getUserID = await fetch(`${API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: Username,
                password: Password,
            }),
        })
        const idUser = await getUserID.json()

        // Start Section Create Students

        axios
            .post('http://localhost:1337/students', {

                fullname: FullName,
                degree: Degree,
                graduation: Graduation,
                users_permissions_user: {
                    id: idUser.user.id
                }

            })
            .then(response => {
                console.log(response);
            });


    }


}
