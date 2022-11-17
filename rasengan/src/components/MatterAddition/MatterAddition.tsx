import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Button, Checkbox, FormControlLabel, Modal, TextField } from '@mui/material';

import { ButtonContainer, ModalContainer, ModalForm, ModalTitle } from './MatterAddition.styled';

import { useErrorGetter } from '../../pages/hooks';

import { initialFormikValues, textFields, validationScheme } from './MatterAddition.consts';
import { MatterAdditionProps } from './MatterAddition.types';
import { MatterFormik } from '../../types/matters.types';

const MatterAddition = ({ title, submitBtnText, open, openClose, submition, customValues }: MatterAdditionProps) => {
  const formik = useFormik({
    initialValues: initialFormikValues,
    validationSchema: validationScheme,
    onSubmit: (values, { resetForm }) => {
      submition(values);
      openClose();
      resetForm();
    }
  });

  const insideCloser = () => {
    formik.resetForm();
    openClose();
  }

  const getError = useErrorGetter<typeof formik.touched, typeof formik.errors>(formik.touched, formik.errors);

  useEffect(() => {
    formik.setValues({
      name: customValues?.name ?? '',
      active: typeof customValues?.active === 'boolean' ? customValues.active : true,
      text: customValues?.text ?? '',
    })
  }, [customValues?.name, customValues?.active, customValues?.text])

  return (
    <Modal open={open} onClose={insideCloser}>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalForm onSubmit={formik.handleSubmit}>
          {textFields.map((one) => (
            <TextField
              key={one.id}
              name={one.name}
              label={one.label}
              value={formik.values[one.name as keyof MatterFormik]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline={one.multiline}
              rows={one?.rows}
              error={!!getError(one.name)}
              helperText={getError(one.name)}
            />
          ))}
          <FormControlLabel
            label='Solved'
            control={<Checkbox checked={!formik.values.active} onChange={() => formik.setFieldValue('active', !formik.values.active)}/>}
          />
          <ButtonContainer>
            <Button variant='contained' color='error' onClick={insideCloser}>Cancel</Button>
            <Button type='submit' variant='contained' color='success'>{submitBtnText}</Button>
          </ButtonContainer>
        </ModalForm>
      </ModalContainer>
    </Modal>
  );
}

export default MatterAddition;