import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL, API_URL } from '@/config/index.js'
import axios from 'axios'
const AuthContext = createContext()


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)


    const router = useRouter()
    useEffect(() => checkUserLoggedIn(), [])


    const getUniversities = async () => {
        console.log("in");
        let dataUni
        const resUniveristy = await axios.get(`http://localhost:1337/universities`).then((res) => {
            dataUni = res.data
        })
        console.log(dataUni);


    }
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
        <AuthContext.Provider value={{ user, error, register, login, logout, getUniversities }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext