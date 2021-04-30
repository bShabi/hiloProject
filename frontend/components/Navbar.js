import style from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'


export default function Navbar() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                {/* <Link href='/'>
                </Link> */}
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Tips & Hocks</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>Mentors</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>join us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/account/login'>
                            <a className='btn-secondary btn-icon'>
                                <FaSignInAlt /> Login
                  </a>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header >
    )
}
