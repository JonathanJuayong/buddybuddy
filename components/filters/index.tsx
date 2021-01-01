import { Button, Divider, VStack } from "@chakra-ui/react";
import { Formik, Form } from 'formik';
import Reference from "yup/lib/Reference";
import { useContext } from 'react';
import { GlobalContext } from '../context';
import * as yup from 'yup';
import RoomsFilter from "./roomsFilter";
import RoommatesFilter from "./roommatesFilter";

const roomsValidationSchema = yup.object({
  city: yup.string().max(15),
  rent: yup.object({
    min: yup.number().min(1).max(299999),
    max: yup.number().moreThan(yup.ref("min") as Reference<number>, "Max rent must be greater than min rent").max(300000),
  }),
  bedrooms: yup.number().min(1).max(99),
  bathrooms: yup.number().min(1).max(99),
  tenants: yup.number().min(1).max(99),
  withUtilities: yup.boolean(),
  type: yup.string().max(15)
})

const roommatesValidationSchema = yup.object({
  preferredLocation: yup.string().max(15),
  budget: yup.object({
    min: yup.number().min(1).max(299999),
    max: yup.number().moreThan(yup.ref("min") as Reference<number>, "Max rent must be greater than min rent").max(300000),
  }),
  gender: yup.string().max(10),
})

const validationSchema = yup.object({
  rooms: roomsValidationSchema,
  roommates: roommatesValidationSchema
})

interface FiltersProps {
  tabIndex: number
}

const Filters: React.FC<FiltersProps> = ({tabIndex}) => {
  const {context, setContext} = useContext(GlobalContext);
  const handleSubmitFilter = (values) => {
    setContext( prev => ({
      ...prev,
      filters: {...values}
    }))
  }
  const filterTypes: Array<JSX.Element> = [
    <RoomsFilter />,
    <RoommatesFilter />
  ]
  return (
    <Formik
      initialValues={context.filters}
      validationSchema={validationSchema}
      onSubmit={handleSubmitFilter}
    >
      {({values, errors, }) => {
        return (
          <Form>
            <VStack spacing="1em">
              {filterTypes[tabIndex]}
              <Divider />
              <Button
                w="100%"
                colorScheme={tabIndex === 0 ? "blue" : "green"}
                type="submit"
              >
                Search
              </Button>
            </VStack>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Filters;