import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { Field } from "formik";
import { SelectOptions } from ".";
import { capitalize } from '../../utils';

interface MyCustomSelectProps {
  name: string,
  label: string,
  options: Array<SelectOptions>
}

const MyCustomSelect: React.FC<MyCustomSelectProps> = ({name, label, options}) => {
  return (
    <Field name={name}>
      {({field}) => (
        <FormControl id={name}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Select {...field}>
            {options.map((option, i) => (
              <option key={i} value={option.value}>{option.label}</option>
            ))}
          </Select>
        </FormControl>
      )}
    </Field>
  )
}

export { MyCustomSelect };