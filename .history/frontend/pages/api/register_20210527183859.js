import cookie from 'cookie'
import { API_URL } from '@/config/index'
import axios from 'axios'

export default async (req, res) => {
    if (req.method === 'POST') {

        const { FullName, Email, Password, Username, isMentor, University, Graduation, Degree, Experise, isStudent, Service, AboutMentor, Pic } = req.body
        console.log(FullName, Experise, Service, AboutMentor, Pic);

        // Create User in Collection Type { User}
        if (isStudent) {

            try {
                axios
                    .post('http://localhost:1337/auth/local/register', {

                        email: Email,
                        password: Password,
                        username: Username,
                        fullname: FullName

                    })
                    .then(response => {
                        console.log(response);
                    });



            } catch (error) {
                console.log(error);
            }
        }

        // Get User Id After Sign In 
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


        // Create User in Collection Type { Students}


        // Start Section Create Students

        axios
            .post('http://localhost:1337/students', {

                fullname: FullName,
                degree: Degree,
                graduation: Graduation,
                univerisry: University,
                users_permissions_user: {
                    id: idUser.user.id
                }

            })
            .then(response => {
                console.log(response);
            });


        if (isMentor) {
            console.log("Mentor");
            try {

                axios
                    .post('http://localhost:1337/auth/local/register', {

                        email: Email,
                        password: Password,
                        username: Username,
                        fullname: FullName

                    })
                    .then(response => {
                        console.log(response);
                    });


                // End Section Create User


                // Get User Id After Sign In 
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
                console.log(Username, Password);
                console.log(idUser.user.id);


                axios
                    .post('http://localhost:1337/mentors', {

                        fullname: FullName,
                        experise: Experise,
                        aboutMentor: AboutMentor,
                        service: Service,
                        image: Pic,
                        users_permissions_user: {
                            id: idUser.user.id
                        }

                    })
                    .then(response => {
                        console.log(response);
                    });


            } catch (error) {
                console.log(error);
            }

        }
        if (!isMentor && !isStudent) {
            console.log(FullName);
            try {

                axios
                    .post('http://localhost:1337/auth/local/register', {

                        email: Email,
                        password: Password,
                        username: Username,
                        fullname: FullName

                    })
                    .then(response => {
                        console.log(response);
                    });



            } catch (error) {
                console.log(error);
            }
        }







    }

}


