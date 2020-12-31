import { Container } from '@chakra-ui/react'
import { FiltersContainer, MainCardContainer } from '../components'
import { useState } from 'react';
import Head from 'next/head'

const Home: React.FC = () => {
  const [openTab, setOpenTab] = useState("rooms")
  return (
    <>
      <Head>
        <title>Find your next roommate | BuddyBuddy</title>
      </Head>
      <Container
        maxW="6xl"
      >
        <FiltersContainer />
        <MainCardContainer />
      </Container>
    </>
  )
}

export default Home;