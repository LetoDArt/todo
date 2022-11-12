import React from 'react';
import { InputBaseComponentProps, SelectChangeEvent, TextField } from '@mui/material';

import { RegistrationButton, RegistrationContainer } from './Registration.styled';
import { CenteredContainer, PageBox, ShadowedContainer } from '../Page.styled';
import CustomFormContainer from '../../components/CustomFormContainer/CustomFormContainer';

import { textFieldsSignup } from './Registration.consts';
import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { ALL_GENDERS } from '../../consts/user.consts';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import { getDateLimitations } from './Registration.utils';

const Registration = () => {
  const { min, max } = getDateLimitations();

  const [age, setAge] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <PageBox>
      <CenteredContainer>
        <ShadowedContainer>
          <CustomFormContainer submit={() => true} title='Sign Up'>
            <RegistrationContainer>
              {textFieldsSignup.map((one) => (
                <TextField
                  key={one.name}
                  type={one.type}
                  variant={one.variant}
                  name={one.name}
                  label={one.label}
                  // value={formik.values[one.name as keyof FormikLoginValues]}
                  // error={!!getError(one.name)}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // helperText={getError(one.name)}
                />
              ))}
              <CustomSelect
                value={age}
                onChange={handleChange}
                label='Gender'
                options={ALL_GENDERS}
              />
              <CustomDatePicker
                value={value}
                setValue={setValue}
                label='Date of birth'
                min={min}
                max={max}
              />
              <TextField
                variant='outlined'
                name='phone'
                label='Phone number'
                placeholder='input number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputProps={{
                  inputComponent: PhoneInput as React.ElementType<InputBaseComponentProps>,
                }}
                // value={formik.values[one.name as keyof FormikLoginValues]}
                // error={!!getError(one.name)}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // helperText={getError(one.name)}
              />
              <RegistrationButton type='submit' variant='contained'>Sign up</RegistrationButton>
            </RegistrationContainer>
          </CustomFormContainer>
        </ShadowedContainer>
      </CenteredContainer>
    </PageBox>
  );
}

export default Registration;
