import '../styles/globals.css'
import Nav from '../components/nav'
import React, {setGlobal} from 'reactn'

setGlobal({
  cart: []
});

function MyApp({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}

export default MyApp
