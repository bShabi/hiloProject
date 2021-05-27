
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
import { API_URL } from '@/config/index'


export default function SignUpPage() {
    // console.log(degrees);
    return (
        <Layout title='User Login'>
            {/* {Login Sider} */}
            <div className={styles.wrapper}>
                <div className={styles.SliderLogin}>
                    <SliderLogin />
                </div>
                <div className={styles.SliderCreateAccount}>
                    <SliderCreateAccount />
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {


    const resStudent = await fetch(`http://localhost:1337/students`)
    const students = []

    const resDegree = await fetch(`http://localhost:1337/degrees`)
    const degrees = []
    // // Get All univeristies {limit == 1000}

    const resUniveristy = fetch(`http://localhost:1337/uuniversities`)
    const univeristy = resUniveristy.json()
    console.log(univeristy);
    // const univeristy = await resUniveristy.json()
    return {
        props: {

            // univeristy: univeristy

        }
    }
}