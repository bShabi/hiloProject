
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import styles from '@/styles/SdCreateAccount.module.css'
import CreateStudent from '@/components/Signin/CreateStudent'


export default function SliderCreateAccount() {

    const [screen, setScreen] = useState(null)

    const studnetHandlerBtn = () => {
        setScreen("Student")
    }
    const mentorHandlerBtn = () => {
        setScreen("Mentor")
    }

    const welcome = () => {
        return (
            <div className={styles.blugbg}>

                <div className={styles.title}>
                    <h2>Create account</h2>
                </div>
                <div className={styles.subtitle}>
                    <h2>Are you a student <b /> </h2> <h2> or a mentor?</h2>
                    <p>*Students will get benefits and discounts on the platform</p>
                </div>
                <div>
                    <button className={styles.btnSignIn} onClick={studnetHandlerBtn}>Student</button>
                    <button className={styles.btnSignIn} onClick={mentorHandlerBtn}>Mentor</button>
                    {screen === 'Student' && (signInStudent())}
                    {screen === 'Mentor' && (signInMentor())}
                </div>
                <div>
                    <button>Skip</button>
                    <p>Already have an account? Sign in</p>
                </div>

            </div>
        )
    }




    return (
        <div className={styles.container}>
            {!screen && welcome()}
            {screen === 'Student' && <CreateStudent />}
            {screen === 'Mentor' && signInMentor()}
        </div>

    )

}