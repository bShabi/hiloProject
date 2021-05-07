import Image from 'next/image'
import style from '@/styles/SiderLogin.module.css'


export default function SliderLogin() {
    return (
        <div>
            <h1> Time to join HiLo Community! </h1>
            <p>A life skills toolbox in the palm of your hand</p>
            <p>and this is just the begining...</p>
            <Image
                src='/SiderLogin.png'
                height={200}
                width={200}
            />

        </div>
    )
}
