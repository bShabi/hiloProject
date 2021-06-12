import style from '@/styles/Footer.module.css'
import Layout from './Layout'
import Image from 'next/image'


// Good Luck 3 //

export default function Footer() {
    return (

        <footer className={style.Footer}>


            <div className={style.container}>
                <div className={style.row}>

                    <div className={style.footerCol}>

                        <Image
                            src="/HiLo-logo.png"
                            alt="HiLo-logo"
                            width={150}
                            height={100}
                        />

                    </div>
                    <div className={style.footerCol}>
                        <ul>
                            <h3>Explore Our Content</h3>
                            <li><a href="#">Tips & Hacks</a></li>
                            <li><a href="#">Mentors</a></li>
                            <li><a href="#">Courses</a></li>
                        </ul>
                    </div>




                    <div className={style.footerCol}>
                        <ul>
                            <h3>Overview</h3>
                            <li><a href="#">About HiLo</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className={style.footerCol2}>
                        <h3>Follow Us on Social Media</h3>
                        <div className={style.socialLinks}>
                            <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
                            <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in fa-lg"></i></a>
                        </div>

                        <h2>Have any Questions? <button>Contact us</button>
                            <h4>Please feel free to contact us at&nbsp;
                                <a href="mailto:info@hilostudent.com"><i>info@hilostudent.com</i></a>
                            </h4> </h2>
                    </div>

                </div>
            </div>
        </footer>

    )
}
