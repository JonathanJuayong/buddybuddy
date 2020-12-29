import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { Field } from "formik";

interface MyCustomNumberInputProps {
  name: string,
  label: string,
  max: number,
  min: number,
  errorHandler?: (error: string) => void
}

const MyCustomNumberInput: React.FC<MyCustomNumberInputProps> = ({name, label, max, min, errorHandler}) => {
  return (
    <Field name={name}>
      {({field, form}) => {
        const errorMesage = name.split(".").reduce((acc, cur) => {
          if (typeof acc !== "undefined") {
            return acc[cur];
          } else {
            return;
          }
        }, form.errors);
        if (errorHandler) errorHandler(errorMesage);
        return (
          <FormControl id={name} isInvalid={!!errorMesage}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <NumberInput
              value={field.value}
              onChange={val => {
                const newValue = parseInt(val);
                form.setFieldValue(field.name, newValue)
              }}
              max={max}
              min={min}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
      )}}
    </Field>
  )
}

export { MyCustomNumberInput };