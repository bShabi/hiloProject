
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
                {/* <FaUser /> Sign in */}
                Login
        </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className={styles.input}>
                <i class="far fa-id-badge"></i>
                    <input
                        placeholder=' Username'
                        type='text'
                        id='email'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className={styles.inputText}
                        
                   />
                  
                </div>
                
                    <i class="fa fa-lock"></i>
                    <input
                        placeholder=' Passowrd'
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputText}
                    />
                    
                <div className={styles.subText}>
                <h3>Or login with</h3><br></br>
                    <div className={styles.socialLinks}>
                    <a href="#"><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a href="#"><i class="fab fa-google fa-2x"></i></a>
  	 				<a href="#"><i class="fab fa-apple fa-2x"></i></a>
  	 				
                    </div>
                </div>    
                

                <input type='submit' value='Next' className={styles.btn} />
            </form>
            <div className={styles.p}>

            <p>
                Don't have an account? <Link href='/account/signup'><a>Sign Up</a></Link>
            </p>

            <p>
                Forgot your password? <Link href='/account/resertpassowrd'>Reset your Password</Link>
            </p>
            </div>
           
           

        </div>
    )
}