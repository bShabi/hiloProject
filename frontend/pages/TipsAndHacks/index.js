import HeadContent from "@/components/HeadContent";
import Layout from "@/components/Layout";
import Categorys from '@/components/Categorys'
import { useState } from "react";
import style from '@/styles/HomePage.module.css'
import sliderStyle from '@/styles/Slider.module.css'
import Slider from '@/components/Slider'
import InfoApp from '@/components/infos/AboutApp'
import JoinUs from '@/components/infos/JoinUs'

export default function TipsAndHacks() {
    const category = ['Money Management', 'Financial Freedom', 'Food & Fit', 'Entrepreneurship', 'Everyday Handyman', 'Career', 'Mental Health', 'Trave']

    const [currectCategory, setCurrectCategory] = useState('Money Management')


    const showCategory = (val) => {
        return <div className={style.categories}>

            {category.map((elm, index) =>
                <ul>

                    <Categorys index={index} category={elm} handleSelect={handleSelect} />

                </ul>
            )
            }
        </div>

    }
    const handleSelect = (value) => {
        setCurrectCategory(value)
    }

    return (
        <Layout>
            <HeadContent
                title="Tips & Hacks"
                content="We make it easy to gain life skills. 
                Explore articles, videos, & courses that equip you with the skills to succeed in 7 steps or less."
            />

            {showCategory()}

            {/* Sliders */}
            <div className={sliderStyle.swiperContainer}>
                <div className={sliderStyle.main}>
                    <Slider title={`Top Tips & Hacks`} category={currectCategory} />
                </div>
            </div>
            <div className={sliderStyle.swiperContainer}>
                <div className={sliderStyle.main}>
                    <Slider title={`New Tips & Hacks`} category={currectCategory} />
                </div>
            </div>
            <div className={sliderStyle.swiperContainer}>
                <div className={sliderStyle.main}>
                    <Slider title={`New Videos`} category={currectCategory} />
                </div>
            </div>
            <InfoApp />
            <JoinUs />
        </Layout>
    )
}
