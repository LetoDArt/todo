import React from 'react';
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


const ListItem = ({
  id,
  title,
  description,
  date,
  checked,
  deleteMatter,
  changeStatus,
  hide,
  changeMatter
}: ListItemProps) => {
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
    <ListItemContainer hide={hide && checked ? 'none' : 'grid'}>
      <CheckBoxContainer>
        <CheckBoxStyled checked={checked} onClick={() => changeStatus(id, checked)}/>
      </CheckBoxContainer>
      <MatterContainer>
        <MatterInfo>
          <MatterTitle checked={checked}>{title}</MatterTitle>
          <MatterDescription checked={checked}>{description}</MatterDescription>
          <MatterDate>{dateLocalized}</MatterDate>
        </MatterInfo>
        <ButtonContainer>
          <div>
            <Button variant='contained' onClick={() => changeMatter(id)}>Change</Button>
          </div>
          {checked && (<div>
            <Button variant='contained' color='error' onClick={() => deleteMatter(id)}>Remove</Button>
          </div>)}
        </ButtonContainer>
      </MatterContainer>
    </ListItemContainer>
  );
};

export default ListItem;
