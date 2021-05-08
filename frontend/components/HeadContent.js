import style from '@/styles/HomePage.module.css'

export default function HeadContent({ title, btn1, btn2, content }) {
  return (
    <>
      {/* <Head>
        <script dangerouslySetInnerHTML={{ __html: sliderScript }} />
      </Head> */}
      <div className={style.content}>
        <h1>{title}</h1>
        <p>{content}</p>

        {btn1 && btn2 && (
          <div className="btns">
            <button className={style.lightbtn}>{btn1}</button>
            <button className={style.darkbtn}>{btn2}</button>
          </div>
        )}
      </div>
      <div className={style.categories}>
        <ul>
          <li className={style.left}>
            <a href="/">Money Management</a>
          </li>
          <li className={style.left}>
            <a href="/">Financial Freedom</a>
          </li>
          <li className={style.left}>
            <a href="/">Food & Fit</a>
          </li>
          <li className={style.left}>
            <a href="/">Entrepreneurship</a>
          </li>
          <li className={style.right}>
            <a href="/">Everyday Handyman</a>
          </li>
          <li className={style.right}>
            <a href="/">Career</a>
          </li>
          <li className={style.right}>
            <a href="/">Mental Health</a>
          </li>
          <li className={style.right}>
            <a href="/">Trave</a>l
          </li>
        </ul>
      </div>
    </>
  )
}
