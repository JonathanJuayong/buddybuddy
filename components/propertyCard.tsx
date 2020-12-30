import { Badge, Box, Grid, Image, IconButton, useToast, toast, Text, HStack, theme, Button } from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { BiBed, BiBath, BiUser } from 'react-icons/bi';
import { BsBuilding } from 'react-icons/bs';
import { useState } from "react";
import { capitalize } from "../utils";

interface PropertyCardProps {
  id: string,
  imageUrl: string,
  type: string,
  monthlyRent: number,
  city: string,
  address: string,
  bedrooms: number,
  bathrooms: number,
  tenants: number,
  withUtilities?: boolean
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  imageUrl,
  type,
  monthlyRent,
  city,
  address,
  bedrooms,
  bathrooms,
  tenants,
  withUtilities

}) => {
  const [favorite, setFavorite] = useState(false);
  const favoriteToast = useToast();
  const handleSetFavorite = () => {
    const toastDetails = {
      title: favorite ? "Removed from Favorites" : "Added to Favorites",
      description: favorite ? "Property removed from favorites" : "Property added to Favorites",
    }
    setFavorite(!favorite);
    favoriteToast({
      title: toastDetails.title,
      description: toastDetails.description,
      status: "success",
      duration: 1500,
      isClosable: true,

    })
  }
  const favoriteIcon = favorite ? <FaHeart /> : <FaRegHeart />;
  const badgeColors = {
    house: "red",
    condo: "blue",
    apt: "purple",
    dorm: "yellow",
  }
  return (
    <Grid
      gap="1em"
    >
      <Box
        position="relative"
      >
        <Badge
          position="absolute"
          bottom="1.5em"
          left="1em"
          px="10px"
          py="5px"
          borderRadius="50px"
          colorScheme={badgeColors[type]}
        >
          {type}
        </Badge>
        <IconButton
          position="absolute"
          bottom="1em"
          right="1em"
          borderRadius="50%"
          variant={favorite ? "solid" : "outline"}
          border="2px solid"
          colorScheme="pink"
          aria-label="favorite"
          icon={favoriteIcon}
          onClick={handleSetFavorite}
        />
        <Image
          w="100%"
          src={imageUrl}
        />
      </Box>
      <Grid
        color="grey"
        gap=".2em"
      >
        <Grid
          gridAutoFlow="column"
          alignItems="baseline"
        >
          <Text
            color={theme.colors.gray[700]}
            fontWeight="700"
            fontSize="1.2rem"
          >
            PHP{monthlyRent}.00/month
          </Text>
          {withUtilities && 
            (
              <HStack
                align="baseline"
                justifySelf="end"
                color="green !important"
              >
                <FaCheckCircle />
                <Text>with utilities</Text>
              </HStack>
            )
          }
        </Grid>
        <HStack align="baseline">
          <BsBuilding />
          <Text>{capitalize(city)} City</Text>
        </HStack>
        <HStack align="baseline">
          <FaMapMarkerAlt />
          <Text maxW="30ch" isTruncated>{address}</Text>
        </HStack>
        <HStack spacing="2em">
          <HStack>
            <BiBath />
            <Text>{bathrooms}</Text>
          </HStack>
          <HStack>
            <BiBed />
            <Text>{bedrooms}</Text>
          </HStack>
          <HStack>
            <BiUser />
            <Text>{tenants}</Text>
          </HStack>
        </HStack>
      </Grid>
      <Button
        colorScheme="blue"
      >
        View Property
      </Button>
    </Grid>
  )
}

export default PropertyCard;