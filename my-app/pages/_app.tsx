import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { aClient } from '../lib/apolloClient'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import '../styles/globals.css'




function MyApp({ Component, pageProps }: AppProps) {

  return(
    <Provider store={store}>
      <ApolloProvider client={aClient}>

        <Component {...pageProps} />
        
      </ApolloProvider> 
    </Provider>
  )
}

export default MyApp
