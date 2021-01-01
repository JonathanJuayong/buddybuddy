import { Container } from '@chakra-ui/react'
import { FiltersContainer, MainCardContainer } from '../components'
import { useState } from 'react';
import Head from 'next/head'

const Home: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (index) => {
    setTabIndex(index);
  }
  return (
    <>
      <Head>
        <title>Find your next roommate | BuddyBuddy</title>
      </Head>
      <Container
        maxW="6xl"
      >
        <FiltersContainer
          tabIndex={tabIndex}
        />
        <MainCardContainer
          tabIndex={tabIndex}
          handleTabChange={handleTabChange}
        />
      </Container>
    </>
  )
}

export default Home;