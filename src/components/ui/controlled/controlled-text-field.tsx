import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui'

export type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...textFieldProps
}: ControlledTextFieldProps<T>) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <TextField
      {...{
        ...field,
        ...textFieldProps,
      }}
    />
  )
}
