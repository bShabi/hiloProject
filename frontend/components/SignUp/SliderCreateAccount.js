
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
            
                    <div className={styles.column}>
                   <h2>Create Account</h2>
                        
                         <div className={styles.subtitle}> 
                        <h1>Are you a student or a mentor?</h1>
                        {/* <h1>or a mentor?</h1> */}
                        <p>*Students will get benefits and discounts on the platform</p>
                         </div> 
                         <div className={styles.btnContext}> 
                         
                            <button className={styles.btnSignIn} onClick={studnetHandlerBtn}>Student</button>
                            <button className={styles.btnSignIn} onClick={mentorHandlerBtn}>Mentor</button>
                            {/* {screen === 'Student' && (CreateStudent(students.student))}
                            {screen === 'Mentor' && (CreateMentor(students.student))} */}
                         </div> 
                         <div className={styles.btnContext}> 
                            <button className={styles.btnSkip} onClick={regualerUserBtn}>Skip&nbsp; <i class='fas fa-angle-right'></i> </button> 
                            <p className={styles.p}>Already have an account? <a className={styles.a}>Sign in</a></p>
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
