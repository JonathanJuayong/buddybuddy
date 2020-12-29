import { Grid } from "@chakra-ui/react"
import PropertyCard from "./propertyCard"
import { PropertyType } from './';

const PropertyCardContainer: React.FC = () => {
  const randomHouse = () => Math.floor(Math.random()*4) + 1;
  const arr = [...Array(20)];
  return (
    <Grid
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap="2em"
      py="2em"
    >
      {arr.map((_, i) => (
        <PropertyCard
          key={i}
          id={`${i}`}
          imageUrl={`/pic/house${randomHouse()}.png`}
          type={PropertyType.condo}
          monthlyRent={12000}
          city="Makati"
          address="#4 kindness st multinational village paranaque city#4 kindness st multinational village paranaque city#4 kindness st multinational village paranaque city#4 kindness st multinational village paranaque city#4 kindness st multinational village paranaque city#4 kindness st multinational village paranaque city"
          bedroom={2}
          bathroom={2}
          tenants={4}
          withUtilities
        />
      ))}
    </Grid>
  )
}

export { PropertyCardContainer };