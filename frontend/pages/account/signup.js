
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
// import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'
import SliderLogin from '@/components/Login/SliderLogin'
import SliderCreateAccount from '@/components/Login/SliderCreateAccount'
import { API_URL } from '@/config/index'


export default function LoginPage({ students, univeristy }) {

    return (
        <Layout title='User Login'>
            {/* {Login Sider} */}
            <div className={styles.wrapper}>
                <div className={styles.SliderLogin}>
                    <SliderLogin />
                </div>
                <div className={styles.SliderCreateAccount}>
                    <SliderCreateAccount student={students} univeristy={univeristy} />
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {





    const resStudent = await fetch(`http://localhost:1337/students`)
    const students = await resStudent.json()

    // // Get All univeristies {limit == 1000}

    const resUniveristy = await fetch(`http://localhost:1337/usa-universities`)
    const univeristy = await resUniveristy.json()
    // const univeristy = await resUniveristy.json()
    return {
        props: {
            students: students,
            univeristy: univeristy

        }
    }
}