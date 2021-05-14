
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'
import SliderLogin from '@/components/Login/SliderLogin'
import SliderCreateAccount from '@/components/SignUp/SliderCreateAccount'
import SignIn from '@/components/Login/SignIn'
import { API_URL } from '@/config/index'


export default function ResetPasswordPage({ students, degrees }) {


    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        console.log("ResetPassword");
    }

    return (
        <Layout title='User Login'>
            {/* {Login Sider} */}
            <div className={styles.wrapper}>
                <div className={styles.SliderLogin}>
                    <SliderLogin />
                </div>
                <div className={styles.SliderCreateAccount}>
                    <p>
                        Please provide us with the email address related to your account and we will send you a reset link to that address:
                        Typography
                   </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder='Email Address'
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type='submit' value='Reset Password' className='btn' />

                    </form>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {


    const resStudent = await fetch(`http://localhost:1337/students`)
    const students = await resStudent.json()

    const resDegree = await fetch(`http://localhost:1337/degrees`)
    const degrees = await resDegree.json()
    // // Get All univeristies {limit == 1000}

    // const resUniveristy = fetch(`http://localhost:1337/usa-universities`)
    // const univeristy = resUniveristy.json()
    // const univeristy = await resUniveristy.json()
    return {
        props: {
            students: students,
            degrees: degrees
            // univeristy: univeristy

        }
    }
}