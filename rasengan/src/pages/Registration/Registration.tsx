import React from 'react';
import { useFormik } from 'formik';
import { InputBaseComponentProps, TextField } from '@mui/material';

import PhoneInput from '../../components/PhoneInput/PhoneInput';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import { CenteredContainer, PageBox, ShadowedContainer } from '../Page.styled';
import { RegistrationButton, RegistrationContainer } from './Registration.styled';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import CustomFormContainer from '../../components/CustomFormContainer/CustomFormContainer';

import { useErrorGetter } from '../hooks';
import { getDateLimitations } from './Registration.utils';

import { formikValidationScheme, registrationFormikInitialValues, textFieldsSignup } from './Registration.consts';
import { ALL_GENDERS } from '../../consts/user.consts';
import { RegistrationFormikValues } from './Registration.types';


const Registration = () => {
  const { min, max } = getDateLimitations();

  const formik = useFormik({
    initialValues: registrationFormikInitialValues,
    validationSchema: formikValidationScheme,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const getError = useErrorGetter<typeof formik.touched, typeof formik.errors>(formik.touched, formik.errors)


  return (
    <PageBox>
      <CenteredContainer>
        <ShadowedContainer>
          <CustomFormContainer submit={formik.handleSubmit} title='Sign Up'>
            <RegistrationContainer>
              {textFieldsSignup.map((one) => (
                <TextField
                  key={one.name}
                  type={one.type}
                  variant={one.variant}
                  name={one.name}
                  label={one.label}
                  value={formik.values[one.name as keyof RegistrationFormikValues]}
                  error={!!getError(one.name)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={getError(one.name)}
                />
              ))}
              <CustomSelect
                value={formik.values.gender}
                onChange={formik.handleChange}
                label='Gender'
                name='gender'
                options={ALL_GENDERS}
                onBlur={formik.handleBlur}
                error={getError('gender') ?? ''}
              />
              <CustomDatePicker
                value={formik.values.birthday}
                setValue={(v) => formik.setFieldValue('birthday', v)}
                label='Date of birth'
                name='birthday'
                min={min}
                max={max}
                onBlur={formik.handleBlur}
                error={formik.errors.birthday}
              />
              <TextField
                variant='outlined'
                name='phone'
                label='Phone number'
                value={formik.values.phone}
                error={!!getError('phone')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={getError('phone')}
                InputProps={{
                  inputComponent: PhoneInput as React.ElementType<InputBaseComponentProps>,
                }}
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
