import { HStack, VStack } from "@chakra-ui/react";
import { MyCustomNumberInput, MyCustomSelect, SelectOptions } from "../customFields";

const RoommatesFilter: React.FC = () => {
  const cityOptions: Array<SelectOptions> = [
    {label: "All", value: ""},
    {label: "Makati", value: "makati"},
    {label: "Ortigas", value: "ortigas"},
    {label: "BGC", value: "BGC"},
    {label: "QC", value: "QC"},
  ]
  const genders: Array<SelectOptions> = [
    {label: "All", value: ""},
    {label: "Male", value: "male"},
    {label: "Female", value: "female"},
  ]
  return (
    <>
      <MyCustomSelect
        name="roommates.preferredLocation"
        label="Preferred Location"
        options={cityOptions}
      />
      <HStack>
        <MyCustomNumberInput
          name="roommates.budget.min"
          label="Min Budget"
          min={1}
          max={299999}
        />
        <MyCustomNumberInput
          name="roommates.budget.max"
          label="Max Budget"
          min={1}
          max={300000}
        />
      </HStack>
      <MyCustomSelect
          name="roommates.gender"
          label="Gender"
          options={genders}
        />
    </>
  )
}

export default RoommatesFilter;