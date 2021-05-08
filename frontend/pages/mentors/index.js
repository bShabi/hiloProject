import Layout from '@/components/Layout'
import HeadContent from '@/components/HeadContent'
import style from '@/styles/Mentors.module.css'

export default function MentorPage() {
  return (
    <>
      {/* Head content + Categories Carusel*/}
      <Layout>
        <HeadContent
          title="Mentors"
          content="Proven experts that connect with students and focus on thier
            individual needs"
        />
        <div className={style.wrapper}>
          <div className={style.box1}>Box 1</div>
          <div className={style.box2}>Box 2</div>
          <div className={style.box3}>Box 3</div>
          <div className={style.box4}>Box 4</div>
          <div className={style.box5}>Box 5</div>
          <div className={style.box6}>Box 6</div>
        </div>
      </Layout>
    </>
  )
}
