import Image from 'next/image'
import style from '@/styles/SiderLogin.module.css'


export default function SliderLogin() {
    return (
        <div className={style.context}>
            <h1> Time to join  HiLo Community! </h1>
            <p>A life skills toolbox in the palm of your hand</p>
            <div className={style.subcontext}>
            <p>and this is just the begining...</p>

            </div>

            <Image
                src='/SiderLogin.png'
                height={209.5}
                width={331}
            />

        </div>
    )
}
