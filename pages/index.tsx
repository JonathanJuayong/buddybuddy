import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import { FilterSidebar, PropertyCardContainer } from '../components'

const Home: React.FC = () => {
  return (
    <>
      <FilterSidebar />
      <Grid
        gap="1em"
        gridTemplateColumns={["1fr",,,"350px 1fr"]}
      >
        {/* GridItem for padding purposes only */}
        <GridItem />
        <PropertyCardContainer />
      </Grid>
    </>
  )
}

export default Home;