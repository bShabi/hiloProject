
import { useState, useEffect, useRef, useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
// import Modal from '@/components/Modal'
import AuthContext from '@/context/AuthContext'
// import styles from '@/styles/AuthForm.module.css'
import styles from '@/styles/MantorSteps.module.css'
import ImageUpload from '@/components/ImageUpload'
import Layout from '../Layout'

export default function CreateMentorSlide() {

    // All Students from account/signUp
    const [usersStudents, setUserStudent] = useState('')

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [experise, setExperise] = useState(' ')
    const [service, setService] = useState('')
    const [aboutMentor, setAboutMentor] = useState('')
    const [mentorIMG, setMentorIMG] = useState('')

    const [stepRegister, setStepRegister] = useState(1)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [finishStep, setFinishStep] = useState(false)


    const { register, error, allUsername, allEmail } = useContext(AuthContext)


    useEffect(() => {
        if (stepRegister === 1) {
            if ((fullName && email) && confirmEmail) {
                setFinishStep(true)
                console.log("have1");
            } else {
                setFinishStep(false)
            }
        }
        if (stepRegister === 2) {
            if ((username && password) && confirmPassword) {
                setFinishStep(true)
                console.log("have2");
            } else {
                setFinishStep(false)
            }
        }
        if (stepRegister === 3) {
            if ((experise && service) && mentorIMG) {
                setFinishStep(true)
                console.log("have3");
            } else {
                setFinishStep(false)
            }
        }

    }, [fullName, password, email, confirmPassword, experise, service, username, mentorIMG])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (stepRegister === 1) {
            if (!fullName || !email) {
                console.log("Error 1");
                return
            }
            if (!patternFullName.test(fullName)) {
                console.log("inValid full name");
                return
            }
            if (validEmail(email)) {
                console.log("Email include");
                return
            }
            if (email != confirmEmail) {
                console.log("Email not match");
                return
            }
            setFinishStep(false)

            setStepRegister(2)
        }
        if (stepRegister === 2) {
            // Check Step Level Two
            if (!username || !password) {
                console.log("error 4");
                return
            }
            if (validUserName(username)) {
                console.log("User include");
                return
            }
            if (!patternPassword.test(password)) {
                console.log("password incorrect");
                return
            }
            if (password != confirmPassword) {
                console.log("password not match");
                return
            }
            setFinishStep(false)

            setStepRegister(3)
        }
        //     experitse services about pic
        if (stepRegister === 3) {
            console.log(mentorIMG);
            const user = {
                FullName: fullName,
                Email: email,
                Password: password,
                Username: username,
                isStudent: false,
                isMentor: true,
                Experise: experise,
                AboutMentor: aboutMentor,
                Service: service,
                Image: mentorIMG
            }
            register(user)
        }

    }

    const validUserName = (name) => {
        let isInclude = false
        allUsername.forEach(element => {
            if (element.toLowerCase() === name.toLowerCase()) {
                isInclude = true
            }
        });
        return isInclude
    }
    const validEmail = (email) => {
        let isInclude = false
        allEmail.forEach(element => {
            if (element.toLowerCase() === email.toLowerCase()) {
                isInclude = true
            }
        });
        return isInclude

    }
    // Suggestions for univeristies from All Students

    const stepOne = () => {
        return (
            <div className={styles.box}>
                <div className={styles.column}>
                    <h1>Create Account</h1>
                    <input
                        placeholder='Full Name'
                        type='text'
                        id='fullname'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.inputText}
                    />

                    <input
                        placeholder='Email Address'
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputText}
                    />
                    <input
                        placeholder='Repeat Email Address'
                        type='email'
                        id='emailconfirm'
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className={styles.inputText}
                    />


                    <div className={styles.subText}>
                        <h3>Or login with</h3>
                        <div className={styles.socialLinks}>
                            <a href="#"><i class="fab fa-facebook-f fa-2x"></i></a>
                            <a href="#"><i class="fab fa-google fa-2x"></i></a>
                            <a href="#"><i class="fab fa-apple fa-2x"></i></a>


                        </div>
                        <input type='submit' value='Next' className={finishStep ? styles.btnNextSucc : styles.btnNext} />
                        <p className={styles.p2}>
                            Already have an account? <Link href='/account/login'><a>Sign in </a></Link>
                        </p>

                    </div>
                </div>
            </div>
        )

    }
    const stepTwo = () => {
        return (
            <div className={styles.box}>
                <div className={styles.column}>
                    <h1>You Will Need a User Name</h1>
                    <input
                        placeholder='User Name'
                        type='text'
                        id='user'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputText}
                    />
                    <h3>And a Password</h3>
                    <input
                        placeholder='Password'
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputText}
                    />

                    <input
                        placeholder='Repeat Password'
                        type='password'
                        id='fullname'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.inputText}
                    />

                    <input type='submit' value='Next' className={finishStep ? styles.btnNextSucc : styles.btnNext} />
                </div>
            </div>
        )
    }
    const stepThree = () => {
        return (


            <div className={styles.box}>
                <div className={styles.column}>
                    <h1>Let’s build your profile!</h1>

                    <input
                        placeholder='Field of experise'
                        type='text'
                        id='experise'
                        value={experise}
                        onChange={(e) => setExperise(e.target.value)}
                        className={styles.inputText}
                    />
                    <input
                        placeholder=' Your Services'
                        type='text'
                        id='Services'
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className={styles.inputText}
                    />
                    <input
                        placeholder=' Short About of yourself(300 Charters)'
                        type='textarea'
                        id='aboutMentor'
                        value={aboutMentor}
                        onChange={(e) => setAboutMentor(e.target.value)}
                        rows="3"
                        className={styles.inputText}
                    />
                    <input
                        placeholder='Upload Best Pic'
                        type='file'
                        id='image'
                        onChange={(e) => setMentorIMG(e.target.files[0])}
                        className={styles.upload}
                    />
                    <br></br>


                    <input type='submit' value='Next' className={finishStep ? styles.btnNextSucc : styles.btnNext} />
                </div>
            </div >
        )


    }

    return (
        <div className={styles.auth}>

            <ToastContainer />
            <form onSubmit={handleSubmit}>
                {/* // Steps  */}
                {stepRegister === 1 && (stepOne())}
                {stepRegister === 2 && (stepTwo())}
                {stepRegister === 3 && (stepThree())}
                {/* {stepRegister != 3 ?
                    <input type='submit' value='Next' className='btn' /> :
                    <input type='submit' value='Im done' className='btn' />
                } */}
            </form>


        </div>
    )
}


