import { Grid, Text } from "@chakra-ui/react"
import RoomsCard from "./roomsCard"
import { properties } from '../dummyData';
import { useContext } from 'react';
import { GlobalContext } from './context';
import { filterProperties } from "../utils";

const RoomsCardContainer: React.FC = () => {
  const {context: {filters}} = useContext(GlobalContext);
  const filtered = filterProperties(properties, filters);
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 300px))"
      gap="2em"
      py="2em"
    >
      {filtered.length !== 0 ? filtered.map(property => (
        <RoomsCard
          key={property.id}
          id={`${property.id}`}
          imageUrl={property.imageUrl}
          type={property.type}
          monthlyRent={property.monthlyRent}
          city={property.city}
          address={property.address}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          tenants={property.tenants}
          withUtilities={property.withUtilities}
        />
      )) : (
        <Text>Sorry, no properties found</Text>
      )
    }
    </Grid>
  )
}

export { RoomsCardContainer };