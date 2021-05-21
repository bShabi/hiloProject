import style from '@/styles/Footer.module.css'
import Layout from './Layout'



// Good Luck //
// Good Luck2 //
export default function Footer() {
    return (
        <footer className={style.Footer}>
           <div className={style.container}>
               <div className={style.row}>

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

                <div className={style.footerCol}>
                <h3>Follow Us on Social Media</h3>
                    <div className={style.socialLinks}>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <h2>Have any Questions?</h2>   
                    <h4>Please feel free to contact us at </h4> 
                   
                </div>
               
               </div>
           </div>
        </footer>
        
        
      
        
    )
}
