
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

export default function LoginPage() {


    return (
        <Layout title='User Login'>
            {/* {Login Sider} */}
            <div className={styles.wrapper}>
                <SliderLogin />
                <SliderCreateAccount />
            </div>
        </Layout>
    )
}