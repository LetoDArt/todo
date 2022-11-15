import React, { useState } from 'react';
import { Button } from '@mui/material';

import {
  ButtonContainer,
  CheckBoxContainer,
  CheckBoxStyled,
  ListItemContainer,
  MatterContainer, MatterDate, MatterDescription,
  MatterInfo,
  MatterTitle
} from './ListItem.styled';

import { ListItemProps } from './ListItem.types';


const ListItem = ({ title, description, date, checked }: ListItemProps) => {
  const [check, setChecked] = useState(checked);
  const dateLocalized = new Date(date).toLocaleDateString(
    'ru-RU',
    {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }
  )

  return (
    <ListItemContainer>
      <CheckBoxContainer>
        <CheckBoxStyled checked={check} onClick={() => setChecked(!check)}/>
      </CheckBoxContainer>
      <MatterContainer>
        <MatterInfo>
          <MatterTitle checked={check}>{title}</MatterTitle>
          <MatterDescription checked={check}>{description}</MatterDescription>
          <MatterDate>{dateLocalized}</MatterDate>
        </MatterInfo>
        <ButtonContainer>
          <div>
            <Button variant='contained'>Change</Button>
          </div>
          {check && (<div>
            <Button variant='contained' color='error'>Remove</Button>
          </div>)}
        </ButtonContainer>
      </MatterContainer>
    </ListItemContainer>
  );
};

export default ListItem;
