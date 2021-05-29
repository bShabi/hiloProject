import Image from 'next/image'
import style from '@/styles/SiderLogin.module.css'


export default function SliderLogin() {
    return (
        
            <div className={style.column}>

            <h1> Time to join </h1>
            <h1> HiLo Community!</h1>
            <p>A life skills toolbox in the palm of your hand</p>
                <div className={style.subcontext}>
                <p>and this is just the begining...</p>

                <Image
                    src='/SiderLogin.png'
                    height={209.5}
                    width={331}
                />

                </div>
            </div>

        
    )
}
