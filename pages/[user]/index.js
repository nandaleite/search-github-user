import styles from '../../styles/Home.module.scss'
import UserCard from '../../components/UserCard';
import { useAppContext } from '../../context'

const User = ({ data }) => {
  const { setUserData, userData } = useAppContext()
  
  if (!userData) setUserData(data)
  
  return (
    <>
      <main className={styles.main}>
        <div className="grid">
          {userData && <UserCard />}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async ({ req, query, params }) => {
  
  const res = await fetch(`https://api.github.com/users/${ params.user }`)
  const data = await res.json()

  return {
    props: { data }
  }

}

export default User