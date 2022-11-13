import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { InputBaseComponentProps, TextField } from '@mui/material';

import PhoneInput from '../PhoneInput/PhoneInput';
import CustomSelect from '../CustomSelect/CustomSelect';
import { ShadowedContainer } from '../../pages/Page.styled';
import { RegistrationContainer } from './RegistrationForm.styled';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import CustomFormContainer from '../CustomFormContainer/CustomFormContainer';

import { useErrorGetter } from '../../pages/hooks';
import { formDataForRequest, getDateLimitations } from '../../pages/Registration/Registration.utils';

import {
  formikValidationScheme,
} from '../../pages/Registration/Registration.consts';
import { ALL_GENDERS } from '../../consts/user.consts';
import { RegistrationFormikValues, RegistrationFormProps } from './RegistrationForm.types';
import { textFieldsParser } from './RegistrationForm.utils';


const RegistrationForm = ({
  initialStates,
  submition,
  title = '',
  children,
  readonly = false,
}: RegistrationFormProps) => {
  const { min, max } = getDateLimitations();
  const textFields = textFieldsParser(readonly);

  const formik = useFormik({
    initialValues: initialStates,
    validationSchema: formikValidationScheme,
    onSubmit: (values) => {
      const clearedData = formDataForRequest(values)
      submition(clearedData)
    }
  })
  const getError = useErrorGetter<typeof formik.touched, typeof formik.errors>(formik.touched, formik.errors);

  const resetFormOnCancel = () => {
    formik.resetForm();
    formik.setValues(initialStates);
  }

  useEffect(() => {
    formik.setValues(initialStates);
  }, [initialStates])

  useEffect(() => {
    if (readonly) resetFormOnCancel()
  }, [readonly])

  
  return (
    <ShadowedContainer>
      <CustomFormContainer submit={formik.handleSubmit} title={title}>
        <RegistrationContainer>
          {textFields.map((one) => (
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
              disabled={readonly}
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
            disabled={readonly}
          />
          <CustomDatePicker
            value={formik.values.birthday}
            setValue={(v) => formik.setFieldValue('birthday', v)}
            label='Date of birth'
            name='birthday'
            min={min}
            max={max}
            onBlur={formik.handleBlur}
            error={getError('birthday') ?? ''}
            disabled={readonly}
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
            disabled={readonly}
          />
          {children}
        </RegistrationContainer>
      </CustomFormContainer>
    </ShadowedContainer>
  );
};

export default RegistrationForm;
