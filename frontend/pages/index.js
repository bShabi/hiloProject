import style from '@/styles/HomePage.module.css'
import sliderStyle from '@/styles/Slider.module.css'
import Slider from '@/components/Slider'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <>
      <Layout>
        {/* <Head>
        <script dangerouslySetInnerHTML={{ __html: sliderScript }} />
      </Head> */}
        <div className={style.content}>
          <h1>HiLo is your partner for life.</h1>
          <p>
            Find the practical answers you are looking for, in a manner that
            would make it easy for you, with experts mentors that will lead you
            to succeed
          </p>
          <div className="btns">
            <button className={style.lightbtn}>Mentors</button>
            <button className={style.darkbtn}>Tips & Hacks</button>
          </div>
        </div>
        <div className={style.categories}>
          <ul>
            <li>
              <a href="/">Money Management</a>
            </li>
            <li>
              <a href="/">Financial Freedom</a>
            </li>
            <li>
              <a href="/">Food & Fit</a>
            </li>
            <li>
              <a href="/">Entrepreneurship</a>
            </li>
            <li>
              <a href="/">Everyday Handyman</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Mental Health</a>
            </li>
            <li>
              <a href="/">Trave</a>l
            </li>
          </ul>
        </div>
      </Layout>
      {/* Sliders */}
      <div className={sliderStyle.swiperContainer}>
        <div className={sliderStyle.main}>
          <Slider />
        </div>
        <h1>bb</h1>
      </div>
      <div className={sliderStyle.swiperContainer}>
        <div className={sliderStyle.main}>
          <Slider />
        </div>
      </div>
    </>
  )
}
