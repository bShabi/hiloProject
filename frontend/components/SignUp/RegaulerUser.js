
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'

export default function CreateRegaulerSlid() {


    // All Students from account/signUp
    const [usersStudents, setUserStudent] = useState("ben")

    const [fullName, setFullName] = useState('Regaulr')
    const [email, setEmail] = useState('Regual@gmail.edu')
    const [password, setPassword] = useState('Aasd1234')
    const [username, setUsername] = useState('Regualer')


    const [stepRegister, setStepRegister] = useState(2)

    const { register, error } = useContext(AuthContext)
    // useEffect(() => {
    //     const AllUsers = students.students.map(user => user.slug)
    //     setUserStudent(AllUsers)
    // }, [students])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        // const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        // const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


        // if (!fullName || !email) {
        //     console.log("Error 1");
        //     return
        // }
        // if (!patternFullName.test(fullName)) {
        //     console.log("inValid full name");
        //     return
        // }

        // setStepRegister(2)
        // // Check Step Level Two
        // if (!username || !password) {
        //     console.log("error 4");
        //     return
        // }
        // if (usersStudents.includes(username)) {
        //     console.log("User include");
        //     return
        // }
        // if (!patternPassword.test(password)) {
        //     console.log("password incorrect");
        //     return
        // }
        if (stepRegister === 2) {
            const user = {
                Fullname: fullName,
                Email: email,
                Password: password,
                Username: username
            }

            register(user)
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

    return (
        <div className={styles.auth}>
            <h1>
                <FaUser /> Create account</h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                {/* // Steps  */}
                {stepRegister === 1 && (stepOne())}
                {stepRegister === 2 && (stepTwo())}
                {stepRegister != 2 ?
                    <input type='submit' value='Next' className='btn' /> :
                    <input type='submit' value='Im done' className='btn' />
                }
            </form>

            <p>
                Already have an account? <Link href='/account/login'>Signin</Link>
            </p>
        </div>
    )
}


