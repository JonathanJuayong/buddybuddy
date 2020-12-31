import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { PropertyCardContainer, RoommateCardContainer } from './';
import { useState } from 'react';

const MainCardContainer: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const handleTabChange = (index) => {
    setTabIndex(index);
  }
  return (
    <Tabs index={tabIndex} colorScheme="blue" isFitted variant="enclosed-colored" onChange={handleTabChange}>
      <TabList>
        <Tab>Rooms</Tab>
        <Tab>Roommates</Tab>
      </TabList>
      <TabPanels>
        <TabPanel><PropertyCardContainer /></TabPanel>
        <TabPanel><RoommateCardContainer /></TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export { MainCardContainer };