import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { PropertyCardContainer, RoommateCardContainer } from './';

interface MainCardContainerProps {
  tabIndex: number,
  handleTabChange: (index: number) => void
} 

const MainCardContainer: React.FC<MainCardContainerProps> = ({tabIndex, handleTabChange}) => {
  return (
    <Tabs index={tabIndex} colorScheme={tabIndex === 0 ? "blue" : "green"} isFitted variant="enclosed-colored" onChange={handleTabChange}>
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