import { Avatar, Badge, Box, Button, Center, Divider, Grid, HStack, Text, theme, VStack } from "@chakra-ui/react";
import { capitalize } from "../utils";
import { GoPrimitiveDot } from 'react-icons/go';
import { BiMoney } from 'react-icons/bi';

interface RoommatesCardProps {
  name: string,
  age: number,
  gender: string,
  imageUrl: string,
  budget: number,
  preferredLocation: string,
  bioSnippet: string
}

const RoommatesCard: React.FC<RoommatesCardProps> = ({name, age, gender, imageUrl, budget, preferredLocation, bioSnippet}) => {
  return (
    <VStack
      color="grey"
    >
      <Center
        position="relative"
        w="100%"
        py="2em"
        borderRadius="10px 10px 0 0"
        bg={theme.colors.gray[100]}
      >
        <Avatar
          name={name}
          size="2xl"
          src={imageUrl}
        />
        <HStack
          position="absolute"
          bottom="-15px"
        >
          <Badge
            px="10px"
            py="5px"
            borderRadius="50px"
            colorScheme="green"
          >
            PHP {budget}/month
          </Badge>
          <Badge
            px="10px"
            py="5px"
            borderRadius="50px"
            colorScheme="green"
          >
            {preferredLocation}
          </Badge>
        </HStack>
      </Center>
      <Grid
        gap=".3em"
        w="100%"
        alignContent="start"
        p="1em"
      >
        <Text
          fontSize="1.2rem"
          fontWeight="700"
          color={theme.colors.gray[700]}
        >
          {name}
        </Text>
        <HStack
          as={Grid}
          justifyItems="baseline"
          fontSize="1rem"
        >
          <Text>{age} years old</Text>
          <GoPrimitiveDot />
          <Text>{capitalize(gender)}</Text>
        </HStack>
        <Text maxW="30ch" isTruncated>{bioSnippet}</Text>
      </Grid>
      <Button
        w="100%"
        borderRadius="0 0 10px 10px"
        colorScheme="green"
      >View Profile</Button>
    </VStack>
  )
}

export default RoommatesCard;