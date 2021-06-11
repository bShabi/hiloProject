import Head from 'next/head'
import style from '@/styles/Layout.module.css'
import Navbar from './Navbar'
import Footer from '@/components/Footer'


export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <div className={style.container}>{children}</div>
      <Footer />

    </div>
  )
}
Layout.defaultProps = {
  title: 'Hilo Project',
  description:
    'Ai platform that brings together students,mentors and universitites in a marketplace to help students gain valuable life skills',
  keywords: 'Student, Platform ,study',
}
