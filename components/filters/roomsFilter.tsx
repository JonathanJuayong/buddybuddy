import { Box, Checkbox, HStack, VStack } from "@chakra-ui/react";
import { Field } from "formik";
import { MyCustomNumberInput, MyCustomSelect, SelectOptions } from "../customFields";

const RoomsFilter: React.FC = () => {
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
  return (
    <>
      <MyCustomSelect
        name="rooms.city"
        label="City"
        options={cityOptions}
      />
      <HStack>
        <MyCustomNumberInput
          name="rooms.rent.min"
          label="Min Rent"
          min={1}
          max={299999}
        />
        <MyCustomNumberInput
          name="rooms.rent.max"
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
    </>
  )
}

export default RoomsFilter;