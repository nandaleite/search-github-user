import { useAppContext } from '../context'

const SearchBox = () => {
  const { setUserData, setLoading, setError } = useAppContext()
  
  const userSearch = async (event) => {
    event.preventDefault()

    setLoading(true)

    const username = event.target.elements.username.value
    const response = await getUser(username)
    
    if (response) {
      setUserData(response)
      setError(null)
    } else {
      setUserData(null)
      setError(`Não foi possível encontrar ${ username }`)
    }

    setLoading(false)
  }
  
  const getUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${ username }`)
      .then(response => (response.ok ? response.json() : Promise.reject(response.statusText) ))
      .then((response) => response)
      .catch((error) => {
        error
      });
    
    return response
  }

  return (
    <form onSubmit={userSearch}>
      <label htmlFor="username" className="sr-only">Usuário</label>
      <input id="username" type="text" autoComplete="username" placeholder="Digite o nome do usuário" required />
      <button type="submit">Procurar</button>
    </form>
  )
}

export default SearchBox
  