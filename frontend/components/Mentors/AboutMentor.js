import style from '@/styles/AboutMentors.module.css'
import Image from 'next/image'

export default function AboutMentor({ title, content }) {
  return (
    <>
     
      <div className={style.content}>
        <h1>{title}</h1>
        <p>{content}</p>
      
      </div>

      <div className={style.box1}>
            <div className={style.row}>
           
            <div className={style.column}>
                
                <Image 
                        src="/HiLo-logo.png"
                        alt="HiLo-logo"
                        width={600}
                        height={600}
                    />
              </div>
            </div>
            <div className={style.column2}>
                
                <h2>Ben Levi </h2>
            <div className={style.right}>
            <span className={style.star} class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>

                <button >Show 150 Reviews</button> 
            </div>
               
                <h3>Organizational & Personal Consultant</h3>
                <p>Consult on organizational and personal matters<br></br>
                within the business and labor market. Coach executives as well as<br></br>
                individuals on their career journey.</p>

                <label className={style.psub}>Can help you with: Preparation for a job interview, resume writing,<br></br> 
                preparation for important meeting, consulting on career journey and <br></br>
                entry to a new role.</label>
                 
                 <div className={style.right2}>
                 <button>Message me!</button> 
                    <div className={style.socialLinks}>
                        <a href="#"><i class="fab fa-facebook-f fa-lg"></i></a>
                        <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in fa-lg"></i></a>
                    </div>
                 </div>
               
              
          
            </div>

            <div className={style.column3}>
            <a href="#">Back</a> 
               
              </div>

        </div>

        <div className={style.about}>
          <h1>About ben</h1>
          <p>I am a high impact Organizational - Occupational Counseling Psychologist and globa Human<br></br>
             Resources Executive, with over twenty years of experience in global Hi-Tech companies. I am <br></br>
             passionate about working with individuals, leaders and organizations that committed to<br></br>
              development and growth and seek a professional consultant and coach.

          </p>
          <p>My ability to combine deep understanding of human believes, values, motivation, together with vast<br></br> 
            experience working in organizations and knowing the labor market, is the uniadded value I bring<br></br>
             to coaching processes, career journey consultation, preparation forwork interviews and resume<br></br> 
             writing.
          </p>
        </div>
        <br></br>
        <div className={style.about}>
          <h1>Expertise</h1>
          <p>I am a high impact Organizational - Occupational Counseling Psychologist and global
          Human Resources Executive, with over twenty years of experience in global Hi-Tech
        companies.
      I am passionate about working with individuals, leaders and organizations that are
      committed to development and growth and seek a professional consultant and coach.

          </p>
          <p>My ability to combine deep understanding of human believes, values, motivation, together
          with vast experience working in organizations and knowing the labor market, is the unique
          added value I bring to coaching processes, career journey consultation, preparation for
          work interviews and resume writing.
          </p>
        </div>
   
    
    </>
  )
}
