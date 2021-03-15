import { useRouter } from 'next/router'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

const Starred = ({ repos }) => {
  const router = useRouter()
  const { user } = router.query

  const { data, error } = useSWR(`https://api.github.com/users/${ user }/starred`, fetcher)

  if (error) return <div>Ocorreu uma falha!</div>
  if (!data) return <div>Carregando repositórios favoritos de { user }... </div>
  
  console.log(data)
  return (
    <div>
      <p>Favoritados por {user}</p>
      <ul>
        {data.map((repository, index) => (
          <li key={index}>
            <Link href={ repository.html_url }>
              <a>{repository.name}</a>    
            </Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default Starred