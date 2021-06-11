import cookie from 'cookie'
import { API_URL } from '@/config/index'
import axios from 'axios'
import { default as FormData } from "form-data"
export default async (req, res) => {
    if (req.method === 'POST') {

        const { FullName, Email, Password, Username, isMentor, University, Graduation, Degree, Experise, isStudent, Service, AboutMentor, Image } = req.body
        console.log(FullName, Experise, Service, AboutMentor, Image);

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






        }


        if (isMentor) {
            console.log("Mentor");
            try {

                await axios
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
                    })
                })
                const idUser = await getUserID.json()


                await axios
                    .post('http://localhost:1337/mentors', {

                        fullname: FullName,
                        experise: Experise,
                        aboutMentor: AboutMentor,
                        service: Service,
                        users_permissions_user: {
                            id: idUser.user.id
                        }

                    })
                    .then(response => {
                        console.log(response);
                    });

                FormData.append('files', Image)
                FormData.append('ref', 'Mentors')
                FormData.append('refId', idUser.user.id)
                FormData.append('field', 'image')
                console.log(FormData);

                // await axios
                //     .post('http://localhost:1337/upload', {

                //         files: Image,
                //         ref: 'Mentors',
                //         refId: idUser.user.id,
                //         field: 'image',
                //     })
                //     .then(response => {
                //         console.log(response);
                //     });


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


