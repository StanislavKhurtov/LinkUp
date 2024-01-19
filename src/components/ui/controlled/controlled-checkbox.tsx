import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxType } from '@/components/ui'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxType, 'id' | 'onChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onValueChange: onChange,
        ref,
        ...checkboxProps,
      }}
    />
  )
}
