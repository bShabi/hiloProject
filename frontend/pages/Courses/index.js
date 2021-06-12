import HeadContent from "@/components/HeadContent";
import Layout from "@/components/Layout";
import sliderStyle from '@/styles/Slider.module.css'
import Slider from '@/components/Slider'
import style from '@/styles/HomePage.module.css'
import Categorys from '@/components/Categorys'

import { useState } from "react";
export default function Courses() {
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
                title="Courses"
                content="We make it easy to gain life skills. 
Explore articles, videos, & courses that equip you with the skills to succeed in 7 steps or less."

            />
            {showCategory()}
            {/* Sliders */}
            <div className={sliderStyle.swiperContainer}>
                <div className={sliderStyle.main}>
                    <Slider title={`New Courses`} category={''} />
                </div>
            </div>
            <div className={sliderStyle.swiperContainer}>
                <div className={sliderStyle.main}>
                    <Slider title={`Top Courses`} category={''} />
                </div>
            </div>


        </Layout>
    )
}
