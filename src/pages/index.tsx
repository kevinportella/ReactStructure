import Head from 'next/head'
import React from 'react'

import LogoDark from '../assets/logodark.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>

      <Head>
        <title>Homepage</title>
      </Head>

        <LogoDark />
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Kevin Portella.</p>
        <h2>imagem meramente ilustrativa. Baseado no design da Rocketseat.</h2>

    </Container>
  )
}
export default Home
