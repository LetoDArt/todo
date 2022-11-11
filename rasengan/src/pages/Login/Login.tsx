import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../redux/hooks/redux.hooks';

import { InputContainer } from './Login.styled';
import { CenteredContainer, PageBox, ShadowedContainer } from '../Page.styled';
import CustomFormContainer from '../../components/CustomFormContainer/CustomFormContainer';

import { useErrorGetter } from './Login.hooks';
import { LoginUserRequest } from '../../redux/reducers/User/user.requests';

import { formikInitialState, formikValidationScheme, textFields } from './Login.consts';
import { FormikLoginValues } from './Login.types';


const Login = () => {
  const dispatch = useAppDispatch();
  
  const formik = useFormik({
    initialValues: formikInitialState,
    validationSchema: formikValidationScheme,
    onSubmit: values => {
      dispatch(LoginUserRequest(values))
    }
  })

  const getError = useErrorGetter<typeof formik.touched, typeof formik.errors>(formik.touched, formik.errors)

  return (
    <PageBox>
      <CenteredContainer>
        <ShadowedContainer>
          <CustomFormContainer title='Log In' submit={formik.handleSubmit}>
            <InputContainer>
              {textFields.map((one) => (
                <TextField
                  key={one.name}
                  type={one.type}
                  variant={one.variant}
                  name={one.name}
                  label={one.label}
                  value={formik.values[one.name as keyof FormikLoginValues]}
                  error={!!getError(one.name)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={getError(one.name)}
                />
              ))}
              <Button type='submit' variant='contained'>Login</Button>
            </InputContainer>
          </CustomFormContainer>
        </ShadowedContainer>
      </CenteredContainer>
    </PageBox>
  );
}

export default Login;