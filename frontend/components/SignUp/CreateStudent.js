
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/SdCreateAccount.module.css'
import Select from 'react-select'
export default function CreateStudentSlid() {


    // All Students from account/signUp
    const [usersStudents, setUsersStudents] = useState([])
    const [alldegree, setAllDegree] = useState('')



    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [university, setUniversity] = useState(' ')
    const [graduation, setGraduation] = useState('')
    const [degree, setDegree] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [stepRegister, setStepRegister] = useState(1)

    const [finishStep, setFinishStep] = useState(false)

    const { register, error, univeristy, getSugesetUniversity, degrees, allUsername, allEmail } = useContext(AuthContext)

    useEffect(async () => {
        await setAllDegree(degrees)
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
            if ((univeristy && graduation) && degree) {
                setFinishStep(true)
                console.log("have3");
            } else {
                setFinishStep(false)
            }
        }

    }, [univeristy, allUsername, allEmail, fullName, password, email, confirmPassword, graduation, degree, username])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const patternEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(\.edu)$/;
        const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        if (stepRegister === 1) {
            if (!fullName || !email || !confirmEmail) {
                console.log("Error 1");
                return
            }
            if (!patternFullName.test(fullName)) {
                console.log("inValid full name");
                return
            }
            if (!patternEmail.test(email)) {
                console.log("invalid email(edu)");
                return
            }
            if (validEmail(email)) {
                console.log("Email include");
                return
            }
            if (email != confirmEmail) {
                console.log("Email is not Match");
                return
            }
            setFinishStep(false)

            setStepRegister(2)

        }
        if (stepRegister === 2) {
            if (!username || !password || !confirmPassword) {
                console.log("error 4");
                return
            }
            if (validUserName(username)) {
                // const test = allUsername.filter(user => user.toLowerCase() === username)
                console.log("username include");
                return
            }
            if (!patternPassword.test(password)) {
                console.log("password incorrect");
                return
            }
            if (password != confirmPassword) {
                console.log("Password is not Match");
                return
            }
            setFinishStep(false)

            setStepRegister(3)

        }

        // Check Step Level Two

        if (stepRegister === 3) {
            const user = {
                FullName: fullName,
                Email: email,
                Password: password,
                Username: username,
                isStudent: true,
                isMentor: false,
                Graduation: graduation,
                Degree: degree,
                University: university
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
    const getSugeset = (e) => {
        if (e.length % 3 === 0)
            getSugesetUniversity(e)
    }

    const stepOne = () => {
        return (
            <div className={styles.box}>

                <div className={styles.column}>

                    <h2>Create Account</h2>
                    <input
                        placeholder='Full Name'
                        type='text'
                        id='fullname'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={styles.inputTextStepOne}
                    />
                    <input
                        placeholder=' Academic Email Address'
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputTextStepOne}
                    />
                    <input
                        placeholder='Repeat Academic Email Address'
                        type='email'
                        id='ConfirmEmail'
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        className={styles.inputTextStepOne}
                    />
                    <div className={styles.subText}>
                        <h3>Or login with</h3>
                        <div className={styles.socialLinks}>
                            <a href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
                            <a href="#"><i className="fab fa-google fa-2x"></i></a>
                            <a href="#"><i className="fab fa-apple fa-2x"></i></a>


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
                        placeholder=' User Name'
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
                        id='confirmpPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.inputText}
                    />

                    <input type='submit' value='Next' className={finishStep ? styles.btnNext2Succ : styles.btnNext2} />
                </div>
            </div>
        )
    }
    const stepThree = () => {
        return (
            <div className={styles.box}>

                <div className={styles.column}>
                    <h3>Let's get to know you!</h3>
                    <Select
                        options={univeristy}
                        onInputChange={(e) => getSugeset(e)}
                        onChange={(e) => setUniversity(e.value)}
                        className={styles.inputTextTree}

                    />
                    <input
                        placeholder=' Your graduation date'
                        type='date'
                        id='graduation'
                        value={graduation}
                        onChange={(e) => setGraduation(e.target.value)}
                        className={styles.inputTextTree}
                    />
                    <Select
                        options={degrees}
                        onChange={(e) => setDegree(e.value)}
                        className={styles.inputTextTree}
                    />


                    <input type='submit' value="I'm Done!" className={finishStep ? styles.btnNext3Succ : styles.btnNext3} />
                </div>
            </div>
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
                    <input type='submit' value='' className='btn' /> :
                    <input type='submit' value='' className='btn' />
                } */}
            </form>
            {error &&
                <div>
                    {error}
                </div>}


        </div>
    )
}


