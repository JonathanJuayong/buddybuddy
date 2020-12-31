import { Grid, Text } from '@chakra-ui/react';
import RoommateCard from './roommateCard';
import { useFetch } from '../utils';
import { useEffect, useState } from 'react';

const RoommateCardContainer: React.FC = () => {
  const [users, setUsers] = useState([])
  const {data, error, loading} = useFetch('https://randomuser.me/api/?results=15');
  useEffect(() => {
    if (data) {
      setUsers(data.results);
    }
  }, [data])
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 300px))"
      gap="2em"
      py="2em"
    >
      {loading ? 
        <Text>Loading Data</Text> : 
        users.map((result, i) => (
          <RoommateCard
            key={i}
            name={`${result.name.first} ${result.name.last}`}
            age={result.dob.age}
            gender={result.gender}
            imageUrl={result.picture.large}
            budget={30000}
            preferredLocation="makati"
            bioSnippet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, unde neque perferendis suscipit explicabo minus."
          />
        ))
      }
    </Grid>
  )
}

export { RoommateCardContainer };