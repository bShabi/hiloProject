import sliderStyle from '@/styles/Slider.module.css'
import Slider from '@/components/Slider'
import Layout from '@/components/Layout'
import HeadConent from '@/components/HeadContent'
import Categorys from '@/components/Categorys'
import style from '@/styles/HomePage.module.css'
import InfoApp from '@/components/infos/AboutApp'
import JoinUs from '@/components/infos/JoinUs'
import { useState } from 'react'

export default function HomePage() {

  const category = ['Money Management', 'Financial Freedom', 'Food & Fit', 'Entrepreneurship', 'Everyday Handyman', 'Career', 'Mental Health', 'Travel']

  const [currectCategory, setCurrectCategory] = useState('Money Management')


  const showCategory = (val) => {
    return <div className={style.categories}>
      {category.map((elm, index) =>

        <ul>

          <Categorys index={index} category={elm} handleSelect={handleSelect} />

        </ul>

      )}
    </div>
  }
  const handleSelect = (value) => {
    setCurrectCategory(value)
  }
  return (
    <>
      {/* Head content + Categories Carusel*/}
      <Layout>
        <HeadConent
          title="HiLo is your partner for life"
          content="Find the practical answers you are looking for, in a manner that
            would make it easy for you, with experts mentors that will lead you
            to succeed"
          btn1="Mentors"
          btn2="Tips & Hacks"
        />
        {/* Category */}

        {showCategory()}

        {/* Sliders */}
        <div className={sliderStyle.swiperContainer}>
          <div className={sliderStyle.main}>
            <Slider title={`Today's Top Tips And Hacks`} category={currectCategory} />
          </div>
        </div>
        <div className={sliderStyle.swiperContainer}>
          <div className={sliderStyle.main}>
            <Slider title={'Top Mentors'} category={currectCategory} />
          </div>
        </div>
        <div className={sliderStyle.swiperContainer}>
          <div className={sliderStyle.main}>
            <Slider title={'Featured Video'} category={currectCategory} />
          </div>
        </div>
        <div className={sliderStyle.swiperContainer}>
          <div className={sliderStyle.main}>
            <Slider title={'Top Courses'} category={currectCategory} />
          </div>
        </div>

        <InfoApp />
        <JoinUs />
      </Layout>
    </>
  )
}
