
import { useState, useEffect, useRef, useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Link from 'next/link'
// import Modal from '@/components/Modal'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/AuthForm.module.css'
import ImageUpload from '@/components/ImageUpload'

export default function CreateMentorSlide() {





    // All Students from account/signUp
    const [usersStudents, setUserStudent] = useState('')

    const [fullName, setFullName] = useState('Ben ShabiMentor')
    const [email, setEmail] = useState('Bshabi@gmai.edu')
    const [password, setPassword] = useState('Aa123456')
    const [username, setUsername] = useState('Mentor')
    const [experise, setExperise] = useState('balblalba ')
    const [service, setService] = useState('sss')
    const [aboutMentor, setAboutMentor] = useState('ssssadasd')
    const [mentorIMG, setMentorIMG] = useState()

    const [stepRegister, setStepRegister] = useState(3)

    const { register, error } = useContext(AuthContext)


    // const imageUploaded = async (e) => {
    //     console.log("clidid");
    //     // const res = await fetch(`${API_URL}/events/${evt.id}`)
    //     // const data = await res.json()
    //     // setImagePreview(data.image.formats.thumbnail.url)
    //     setShowModal(false)
    // }

    // useEffect(() => {
    //     const AllUsers = students.students.map(user => user.slug)
    //     setUserStudent(AllUsers)
    // }, [students])
    // useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        // const patternFullName = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        // const patternEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+(\.edu)$/;
        // const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;


        // if (!fullName || !email) {
        //     console.log("Error 1");
        //     return
        // }
        // if (!patternFullName.test(fullName)) {
        //     console.log("inValid full name");
        //     return
        // }
        // if (!patternEmail.test(email)) {
        //     console.log("invalid email(edu)");
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
        // setStepRegister(3)
        //     experitse services about pic
        if (stepRegister === 3) {
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
                MentorIMG: mentorIMG
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
    const stepThree = () => {
        return (
            <div>
                <h1>Step 3</h1>

                <div>
                    <h3>Lets get to know you!</h3>
                    <input
                        placeholder='Field of experise'
                        type='text'
                        id='experise'
                        value={experise}
                        onChange={(e) => setExperise(e.target.value)}
                    />
                    <input
                        placeholder='Your Services'
                        type='text'
                        id='Services'
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    />
                    <input
                        placeholder='Short About of yourself(300 Charters)'
                        type='text'
                        id='aboutMentor'
                        value={aboutMentor}
                        onChange={(e) => setAboutMentor(e.target.value)}
                    />
                    <input
                        placeholder='Upload Best Pic'
                        type='file'
                        id='image'
                        value={mentorIMG}
                        onChange={(e) => setMentorIMG(e.target.value)}
                    />


                </div>
            </div >
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

            <p>
                Already have an account? <Link href='/account/login'>Signin</Link>
            </p>
        </div>
    )
}


