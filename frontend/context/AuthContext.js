import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL, API_URL } from '@/config/index.js'
import axios from 'axios'
const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    let univeristy = []
    let degrees = []
    let allUsername = []
    let allEmail = []


    const [error, setError] = useState(null)
    // const [univeristy, setUniveristy] = useState()

    const router = useRouter()
    useEffect(async () => {
        checkUserLoggedIn()
        // await forgotPassword()
        await getAllUsers()
        await getUniversities()
        await getDegree()
        await getAllEmail()
    }, [])

    const getAllEmail = async () => {
        await axios.get(`http://localhost:1337/Users`).then((res) => {
            res.data.forEach((elm) => {
                allEmail.push(elm.email)
            })
            console.log(allEmail);

        }
        )
    }
    const getAllUsers = async () => {
        await axios.get(`http://localhost:1337/Users`).then((res) => {
            res.data.forEach((elm) => {
                allUsername.push(elm.username)
            })
            console.log(allUsername);

        }
        )
    }

    const getSugesetUniversity = async (value) => {
        console.log(value);
        let degree = []
        await axios.get(`http://localhost:1337/universities?NAME_contains=${value}`).then((res) => {
            console.log(res);
        })
    }
    const getDegree = async () => {
        let degree = []
        let resData
        await axios.get(`http://localhost:1337/degrees`).then((res) => {
            resData = res.data
            resData.forEach(elm => {
                degrees.push({ value: elm.degree, label: elm.degree })
            })
            console.log(degrees);
        })

    }
    const getUniversities = async () => {
        console.log("in");
        let dataForm = []
        const resUniveristy = await axios.get(`http://localhost:1337/universities`).then((res) => {
            dataForm = res.data
            dataForm.forEach(element => {
                univeristy.push({ value: element.NAME, label: element.NAME })

            });
            console.log(univeristy);

        })
    }

    // const forgotPassword = async (email) => {
    //     axios
    //         .post('http://localhost:1337/auth/forgot-password', {
    //             email: 'bshabi.dev@gmail.com',
    //             url:
    //                 'http:/localhost:1337/admin/plugins/users-permissions/auth/reset-password',
    //         })
    //         .then(response => {
    //             // Handle success.
    //             console.log('Your user received an email');
    //         })
    //         .catch(error => {
    //             // Handle error.
    //             console.log('An error occurred:', error.response);
    //         });
    // }
    const register = async (user) => {
        console.log(user);

        const res = await fetch(`${NEXT_URL}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user),
        })

        const data = await res.json()
        console.log("data", res.data)
        console.log("data", data)
        if (res.ok) {
            setUser(data.user)
            router.push('/')
        } else {
            setError(data.message)
            setError(null)
        }
    }

    //  Login User 
    const login = async ({ userName: identifier, password }) => {
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier,
                password,
            }),
        })

        const data = await res.json()

        if (res.ok) {
            console.log("ok");
            setUser(data.user)
            router.push('/')
        } else {
            setError(data.message)
            setError(null)
        }
    }



    // Logout user
    const logout = async () => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST',
        })

        if (res.ok) {
            setUser(null)
            router.push('/')
        }
    }

    // Check if user is logged in
    const checkUserLoggedIn = async (user) => {
        const res = await fetch(`${NEXT_URL}/api/user`)
        const data = await res.json()
        if (res.ok) {
            setUser(data.user)
        } else {
            setUser(null)
        }
    }
    return (
        <AuthContext.Provider value={{ getSugesetUniversity, allUsername, degrees, univeristy, user, error, register, login, logout, getUniversities, allEmail }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext