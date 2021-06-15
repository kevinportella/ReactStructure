import React from 'react'
import GlobalStyle from '../styles/globlal'
import theme from '../styles/theme'

import {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components'

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
