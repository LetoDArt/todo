import React, { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

export interface PhoneInputTypes {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

const PhoneInput = forwardRef(({ name, onChange, ...props }: PhoneInputTypes, ref) => (
  <IMaskInput
    {...props}
    {...ref}
    mask='+7(#00) 000-00-00'
    definitions={{
      '#': /[1-9]/,
    }}
    onAccept={(value) => onChange({ target: { name, value } })}
    placeholder='+7(___) ___-__-__'
  />
));

export default PhoneInput as any;
