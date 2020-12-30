import { Box, Button, Checkbox, Divider, HStack, VStack } from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik';
import Reference from "yup/lib/Reference";
import { SelectOptions, MyCustomNumberInput, MyCustomSelect } from "./customFields";
import { defaultState } from './context';
import { useContext } from 'react';
import { GlobalContext } from './context';
import * as yup from 'yup';

const validationSchema = yup.object({
  city: yup.string().max(15),
  rent: yup.object({
    min: yup.number().min(1).max(299999),
    max: yup.number().moreThan(yup.ref("min") as Reference<number>, "Max rent must be greater than min rent").max(300000),
  }),
  rooms: yup.object({
    bedrooms: yup.number().min(1).max(99),
    bathrooms: yup.number().min(1).max(99),
    tenants: yup.number().min(1).max(99),
    withUtilities: yup.boolean(),
    type: yup.string().max(15)
  }),
  roommates: yup.object({
    gender: yup.string().max(10),
  })
})

const Filters: React.FC = () => {
  const {filters: initialValues} = defaultState;
  const {context, setContext} = useContext(GlobalContext);
  const cityOptions: Array<SelectOptions> = [
    {label: "All", value: ""},
    {label: "Makati", value: "makati"},
    {label: "Ortigas", value: "ortigas"},
    {label: "BGC", value: "BGC"},
    {label: "QC", value: "QC"},
  ]
  const roomTypes: Array<SelectOptions> = [
    {label: "All", value: ""},
    {label: "Apartment", value: "apt"},
    {label: "Condo Unit", value: "condo"},
    {label: "Dormitory", value: "dorm"},
    {label: "House", value: "house"},
  ]
  const genders: Array<SelectOptions> = [
    {label: "All", value: ""},
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
  ]
  const handleSubmitFilter = (values) => {
    setContext( prev => ({
      ...prev,
      filters: {...values}
    }))
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmitFilter}
    >
      {({values, errors, }) => {
        return (
          <Form>
            <VStack spacing="1em">
              <MyCustomSelect
                name="city"
                label="City"
                options={cityOptions}
              />
              <HStack>
                <MyCustomNumberInput
                  name="rent.min"
                  label="Min Rent"
                  min={1}
                  max={299999}
                />
                <MyCustomNumberInput
                  name="rent.max"
                  label="Max Rent"
                  min={1}
                  max={300000}
                />
              </HStack>
              <Box alignSelf="start">
                <Field name="rooms.withUtilities">
                  {({field}) => (
                    <Checkbox {...field}>With Utilities</Checkbox>
                  )}
                </Field>
              </Box>
              <HStack>
                <MyCustomNumberInput
                  name="rooms.bedrooms"
                  label="Bedrooms"
                  min={1}
                  max={99}
                />
                <MyCustomNumberInput
                  name="rooms.bathrooms"
                  label="Bedrooms"
                  min={1}
                  max={99}
                />
                <MyCustomNumberInput
                  name="rooms.tenants"
                  label="Tenants"
                  min={1}
                  max={99}
                />
              </HStack>
              <MyCustomSelect
                name="rooms.type"
                label="Room type"
                options={roomTypes}
              />
              <MyCustomSelect
                name="roommates.gender"
                label="Gender"
                options={genders}
              />
              <Divider />
              <Button
                w="100%"
                colorScheme="blue"
                type="submit"
              >
                Search
              </Button>
            </VStack>
            {/* <pre>values: {JSON.stringify(values, null, 2)}</pre> */}
            <pre>Context: {JSON.stringify(context, null, 2)}</pre>
            {/* <pre>errors: {JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )
      }}
    </Formik>
  )
}

export default Filters;