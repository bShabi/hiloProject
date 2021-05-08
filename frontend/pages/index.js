import sliderStyle from '@/styles/Slider.module.css'
import Slider from '@/components/Slider'
import Layout from '@/components/Layout'
import HeadConent from '@/components/HeadContent'

export default function HomePage() {
  return (
    <>
      {/* Head content + Categories Carusel*/}
      <Layout>
        <HeadConent
          title="HiLo is your partner for life."
          content="Find the practical answers you are looking for, in a manner that
            would make it easy for you, with experts mentors that will lead you
            to succeed"
          btn1="Mentors"
          btn2="Tips & Hacks"
        />
      </Layout>
      {/* Sliders */}
      <div className={sliderStyle.swiperContainer}>
        <div className={sliderStyle.main}>
          <Slider name={'example'} />
        </div>
      </div>
      <div className={sliderStyle.swiperContainer}>
        <div className={sliderStyle.main}>
          <Slider />
        </div>
      </div>
    </>
  )
}
