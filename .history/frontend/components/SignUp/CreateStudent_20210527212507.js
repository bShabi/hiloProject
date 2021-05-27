
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import router from 'next/router'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'
import Select from 'react-select'


export default function CreateStudentSlid() {


    // All Students from account/signUp
    const [usersStudents, setUserStudent] = useState("ben")

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [university, setUniversity] = useState(' ')
    const [graduation, setGraduation] = useState('')
    const [degree, setDegree] = useState('')

    const [stepRegister, setStepRegister] = useState(3)

    const { register, error, getUniversities } = useContext(AuthContext)
    useEffect(async () => {
        console.log(getUniversities())
    }, [])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const patternEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(\.edu)$/;
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
            if (!patternEmail.test(email)) {
                console.log("invalid email(edu)");
                return
            }
            setStepRegister(2)
        }
        if (stepRegister === 2) {
            if (!username || !password) {
                console.log("error 4");
                return
            }
            if (usersStudents.includes(username)) {
                console.log("username include");
                return
            }
            if (!patternPassword.test(password)) {
                console.log("password incorrect");
                return
            }
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
            router.push('/')
        }

    }

    // Suggestions for univeristies from All Students

    const stepOne = () => {
        return (
            <div>
                <div>
                    <h1>Step 1</h1>
                    <input
                        placeholder='Full Name'
                        type='text'
                        id='fullname'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder='Academic Email Address'
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
        )

    }
    const stepTwo = () => {
        return (
            <div>
                <h1>Step 2</h1>

                <div>
                    <h3>You will need a user name</h3>
                    <input
                        placeholder='User Name'
                        type='text'
                        id='user'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <h3>And a password</h3>
                    <input
                        placeholder='Password'
                        type='password'
                        id='fullname'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        )
    }
    const stepThree = () => {
        return (
            <div>
                <h1>Step 3</h1>

                <div>
                    <h3>Lets get to know you!</h3>
                    <Select options={university} />

                    <input
                        placeholder='Your university'
                        type='text'
                        id='university'
                        value={university}
                        onChange={(e) => getuniversitys(e.target.value)}
                    />
                    <input
                        placeholder='Your graduation date'
                        type='date'
                        id='fullname'
                        value={graduation}
                        onChange={(e) => setGraduation(e.target.value)}
                    />
                    <input
                        placeholder='Degree'
                        type='text'
                        id='fullname'
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    />

                </div>
            </div>
        )


    }

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> Create account</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                {/* // Steps  */}
                {stepRegister === 1 && (stepOne())}
                {stepRegister === 2 && (stepTwo())}
                {stepRegister === 3 && (stepThree())}
                {stepRegister != 3 ?
                    <input type='submit' value='Next' className='btn' /> :
                    <input type='submit' value='Im done' className='btn' />
                }
            </form>
            {error &&
                <div>
                    {error}
                </div>}

            <p>
                Already have an account? <Link href='/account/login'>Signin</Link>
            </p>
        </div>
    )
}


