
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function LoginPage() {


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { login, error, user } = useContext(AuthContext)

    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ userName, password })
    }

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> Sign in
        </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder='User Name'
                        type='text'
                        id='email'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder='Passowrd'
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type='submit' value='Login' className='btn' />
            </form>

            <p>
                Don't have an account? <Link href='/account/signup'>Register</Link>
            </p>

            <p>
                Forgot Password? <Link href='/account/resertpassowrd'>Reset Password</Link>
            </p>
        </div>
    )
}