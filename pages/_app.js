import '../styles/globals.scss'
import '../styles/grid.scss'
import { AppWrapper } from '../context/'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>  
  )
}

export default MyApp
