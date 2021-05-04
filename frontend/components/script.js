import style from '@/styles/Navbar.module.css'
if (typeof window !== 'undefined') {
  const hamburger = document.getElementById('hamburger')
  const navUL = document.getElementById('nav-ul')
  const header = document.getElementById('header')
  hamburger.addEventListener('click', () => {
    navUL.classList.toggle(style.show)
    header.classList.toggle(style.show)
  })
}
