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
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Life Tips & Hacks</a>
            </Link>
          </li>
          <li>
            <Link href="/mentors">
              <a>Mentors</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Join Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className={style.btnLogin}>
            <Link href="/account/login">
              <a className="btn-secondary btn-icon">
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
