
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function CreateStudent() {


    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    const [university, setUniversity] = useState('')
    const [graduation, setGraduation] = useState('')
    const [degree, setDegree] = useState(false)

    // const { login, error } = useContext(AuthContext)

    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        // login({ email, password })
    }

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> Create account</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder='Full Name'
                        type='text'
                        id='fullname'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <input type='submit' value='Login' className='btn' />
            </form>

            <p>
                Don't have an account? <Link href='/account/register'>Register</Link>
            </p>
        </div>
    )
}