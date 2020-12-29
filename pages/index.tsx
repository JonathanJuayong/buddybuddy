import { Container, Grid, GridItem } from '@chakra-ui/react'
import { FiltersContainer, PropertyCardContainer } from '../components'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
      <Container
        maxW="6xl"
      >
        <FiltersContainer />
        <PropertyCardContainer />
      </Container>
    </>
  )
}

export default Home;