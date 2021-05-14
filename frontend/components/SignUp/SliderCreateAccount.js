
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from 'react'
import styles from '@/styles/SdCreateAccount.module.css'
import CreateStudent from '@/components/SignUp/CreateStudent'
import CreateMentor from '@/components/SignUp/CreateMentor'
import CreateReaulerUser from '@/components/SignUp/RegaulerUser'
import RegaulerUser from '@/components/SignUp/RegaulerUser'

export default function SliderCreateAccount(students, degrees) {

    const [screen, setScreen] = useState(null)

    const studnetHandlerBtn = () => {
        setScreen("Student")
    }
    const mentorHandlerBtn = () => {
        setScreen("Mentor")
    }
    const regualerUserBtn = () => {
        setScreen("Reauler")
    }

    const welcome = () => {
        return (
            <div className={styles.blugbg}>

                <div className={styles.title}>
                    <h2>Create account</h2>
                </div>
                {/* <div className={styles.subtitle}> */}
                <h3>Are you a student or a mentor?</h3>
                <p>*Students will get benefits and discounts on the platform</p>
                {/* </div> */}
                <div>
                    <button className={styles.btnSignIn} onClick={studnetHandlerBtn}>Student</button>
                    <button className={styles.btnSignIn} onClick={mentorHandlerBtn}>Mentor</button>
                    {/* {screen === 'Student' && (CreateStudent(students.student))}
                    {screen === 'Mentor' && (CreateMentor(students.student))} */}

                </div>
                <div>
                    <button onClick={regualerUserBtn}>Skip</button>
                    <p>Already have an account? Sign in</p>
                </div>

            </div>
        )
    }




    return (
        <div className={styles.container}>
            {!screen && welcome()}
            {screen === 'Student' && <CreateStudent students={students.student} />}
            {screen === 'Mentor' && <CreateMentor students={students.student} />}
            {screen === 'Reauler' && <CreateReaulerUser />}
        </div>

    )

}
