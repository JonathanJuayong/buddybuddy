import { Container } from '@chakra-ui/react'
import { FiltersContainer, PropertyCardContainer, RoommateCardContainer } from '../components'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Find your next roommate | BuddyBuddy</title>
      </Head>
      <Container
        maxW="6xl"
      >
        <FiltersContainer />
        <PropertyCardContainer />
        <RoommateCardContainer />        
      </Container>
    </>
  )
}

export default Home;