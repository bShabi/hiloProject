import style from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import './script'

export default function Navbar() {
  return (
    <header className={style.header} id="header">
      <div className={style.logo}>
        {/* <Link href='/'>
                </Link> */}
      </div>
      <nav className={style.navbar}>
        <div className={style.center}>
          <button className={style.hamburger} id="hamburger">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className={style.navUl} id="nav-ul">
          <li>
            <Link href="/">
              <a> <Image
                src="/HiLo-logo.png"
                alt=""
                width={50}
                height={50}
              /></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Explorer Ask</a>
            </Link>
          </li>
          <li>
            <Link href="/TipsAndHacks">
              <a>Life Tips & Hacks</a>
            </Link>
          </li>
          <li>
            <Link href="/mentors">
              <a>Mentors</a>
            </Link>
          </li>
          <li>
            <Link href="/Courses">
              <a>Courses</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a>About Hilo</a>
            </Link>
          </li>
          {/* Sign up Button  */}
          <li className={style.btnSignin}>
            <Link href="/account/signup">
              <a className="btn-secondary">
                Join HiLo
              </a>
            </Link>
          </li>
          {/* Login Button */}
          <li className={style.btnLogin}>
            <Link href="/account/login">
              <a>
                Log in
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
