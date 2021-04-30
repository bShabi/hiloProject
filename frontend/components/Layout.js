import Head from 'next/head'

export default function Layout({ title, keywords, description, children }) {
    return (
        <div>
            <Head>

                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>


            {children}
        </div>
    )
}
Layout.defaultProps = {
    title: 'Hilo Project',
    description: 'Ai platform that brings together students,mentors and universitites in a marketplace to help students gain valuable life skills',
    keywords: 'Student, Platform ,study'
}