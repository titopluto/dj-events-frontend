import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from './Header'
import Showcase from './Showcase'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'

export default function Layout( {title, keywords, description, children}) {

  const router = useRouter()
  console.log(router)

  return (
    <div>
      <Head>
        <title> {title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header/>
      {
        router.pathname == "/" && <Showcase/>
      }
      <div className={styles.container}>
        { children }
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the lates DJ and other music events',
  keywords: 'music, dj, events'

}
