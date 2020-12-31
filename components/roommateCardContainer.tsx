import { Grid, Text } from '@chakra-ui/react';
import RoommateCard from './roommateCard';
import { useFetch } from '../utils';
import { useState } from 'react';

const RoommateCardContainer: React.FC = () => {
  const {data, error, loading} = useFetch('https://randomuser.me/api/?results=15');
  console.log({data, error});
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 300px))"
      gap="2em"
      py="2em"
    >
      {loading ? <Text>Loading Data</Text> : <RoommateCard />}
    </Grid>
  )
}

export { RoommateCardContainer };