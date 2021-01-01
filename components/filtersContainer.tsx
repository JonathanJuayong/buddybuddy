import { 
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure 
} from "@chakra-ui/react"
import { BiFilter } from 'react-icons/bi';
import Filters from './filters';

interface FiltersContainerProps {
  tabIndex: number
}

const FiltersContainer: React.FC<FiltersContainerProps> = ({tabIndex}) => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <IconButton
        zIndex="2"
        size="lg"
        w="3em"
        h="3em"
        borderRadius="50%"
        position="fixed"
        bottom="3em"
        fontSize="1.5em"
        right="10vw"
        colorScheme={tabIndex === 0 ? "blue" : "green"}
        aria-label="open filters"
        onClick={onOpen}
        icon={<BiFilter/>}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filters:</DrawerHeader>
            <DrawerBody>
              <Filters />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export { FiltersContainer }