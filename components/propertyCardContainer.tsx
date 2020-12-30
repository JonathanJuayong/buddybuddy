import { Grid } from "@chakra-ui/react"
import PropertyCard from "./propertyCard"
import { properties } from '../dummyData';
import { useContext } from 'react';
import { GlobalContext } from './context';

const PropertyCardContainer: React.FC = () => {
  const {context, setContext} = useContext(GlobalContext);
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap="2em"
      py="2em"
    >
      {properties.map((property) => (
        <PropertyCard
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
      ))}
    </Grid>
  )
}

export { PropertyCardContainer };