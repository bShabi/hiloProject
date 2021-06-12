import style from '@/styles/HomePage.module.css'

export default function HeadContent({ title, btn1, btn2, content, input2 }) {
  return (
    <>
      {/* <Head>
        <script dangerouslySetInnerHTML={{ __html: sliderScript }} />
      </Head> */}

      <div className={style.content}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>

      <div className={style.categories2}>
        <div className={style.search}>
          <input className={style.inputSearch} type="text" placeholder="Ask us something...">
          </input>
          <button className={style.searchBdutton} type="submit" >
            <i class="fa fa-question-circle fa-5x" aria-hidden="true" ></i>
          </button>
        </div>

      </div>


      {/* <div className={style.categories}>

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
            <a href="/">Trave</a>
          </li>
        </ul>
      </div> */}
    </>
  )
}
