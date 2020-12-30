import { Grid } from "@chakra-ui/react"
import PropertyCard from "./propertyCard"
import { properties } from '../dummyData';
import { useContext } from 'react';
import { GlobalContext } from './context';
import { filterProperties } from "../utils";

const PropertyCardContainer: React.FC = () => {
  const {context: {filters}} = useContext(GlobalContext);
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 300px))"
      gap="2em"
      py="2em"
    >
      {filterProperties(properties, filters).map((property) => (
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