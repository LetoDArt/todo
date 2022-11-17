import React from 'react';
import { Modal } from '@mui/material';
import { SpinnerInfinity } from 'spinners-react';

import { SpinnerCenterBox } from './CustomSpinner.styled';

import { THE_MAIN_BLUE, THE_SECONDARY_GRAY } from '../../consts/styles.consts';
import { CustomSpinnerProps } from './CustomSpinner.types';

const CustomSpinner = ({ open }: CustomSpinnerProps) => (
  <Modal open={open}>
    <SpinnerCenterBox>
      <SpinnerInfinity
        enabled={open}
        size={100}
        color={THE_MAIN_BLUE}
        secondaryColor={THE_SECONDARY_GRAY}
        speed={70}
      />
    </SpinnerCenterBox>
  </Modal>
);

export default CustomSpinner;
