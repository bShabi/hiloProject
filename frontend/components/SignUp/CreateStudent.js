
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/SdCreateAccount.module.css'

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

    const [stepRegister, setStepRegister] = useState(1)

    const { register, error } = useContext(AuthContext)
    // useEffect(() => {
    //     const AllUsers = students.students.map(user => user.slug)
    //     setUserStudent(AllUsers)
    // }, [students])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const patternEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(\.edu)$/;
        const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


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
        // Check Step Level Two
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
        if (stepRegister === 3) {
            const user = {
                FullName: fullName,
                Email: email,
                Password: password,
                Username: username,
                isStudent: true,
                isMentor: false,
                Graduation: graduation,
                Degree: degree
            }
            register(user)
        }

    }

    const validataion = () => {

    }

    // Suggestions for univeristies from All Students

    const stepOne = () => {
        return (
            <div className={styles.box}>
               
                    <div className={styles.column}>

                    <h2>Create Account</h2>
                    <input
                        placeholder=' Full Name'
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
                        placeholder=' Repeat Email Address'
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.inputTextStepOne}
                    />

            <div className={styles.subText}>
                <h3>Or login with</h3>
                    <div className={styles.socialLinks}>
                    <a href="#"><i class="fab fa-facebook-f fa-2x"></i></a>
                    <a href="#"><i class="fab fa-google fa-2x"></i></a>
  	 				<a href="#"><i class="fab fa-apple fa-2x"></i></a>
                       
                      
                    </div>
                <input type='submit' value='Next' className={styles.btnNext} />
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
                        placeholder=' Password'
                        type='password'
                        id='fullname'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputText}
                    />

                      <input
                        placeholder=' Repeat Password'
                        type='password'
                        id='fullname'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputText}
                       />

                        <input type='submit' value='Next' className={styles.btnNext2} />
                </div>
            </div>
        )
    }
    const stepThree = () => {
        return (
            <div className={styles.box}>
               
                <div className={styles.column}>
                    <h3>Let's get to know you!</h3>
                    <input
                        placeholder=' Your university'
                        type='text'
                        id='university'
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        className={styles.inputTextTree}
                    />
                    <input
                        placeholder=' Your graduation date'
                        type='date'
                        id='fullname'
                        value={graduation}
                        onChange={(e) => setGraduation(e.target.value)}
                        className={styles.inputTextTree}
                    />
                    <input
                        placeholder=' Degree'
                        type='text'
                        id='fullname'
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                        className={styles.inputTextTree}
                    />

                    <input type='submit' value="I'm Done!" className={styles.btnNext3} />
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


