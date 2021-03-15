import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import SearchBox  from '../components/SearchBox';
import Loading from '../components/Loading';
import UserCard from '../components/UserCard';
import { useAppContext } from '../context'

const Home = () => {
  const { 
    username,
    userData,
    loading,
    error,
    setUsername,   
    setUserData,
    setLoading,
    setError 
  } = useAppContext()

  return (
    <div className={styles.container}>
      <Head>
        <title>Search Github User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca de usuário Github
        </h1>

        <div className="grid">
          <SearchBox />
        </div>

        <div className="grid">
          {loading && <Loading />}
        </div>

        <div className="grid">
          {userData && <UserCard />}
          {error ? error : ''}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://github.com/nandaleite">
          <a>Made by Fernanda Leite</a>
        </Link>
      </footer>
    </div>
  )
}

export default Home