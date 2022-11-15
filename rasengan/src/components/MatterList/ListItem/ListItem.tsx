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

const ListItem = () => {
  const [check, setChecked] = useState(false);

  return (
    <ListItemContainer>
      <CheckBoxContainer>
        <CheckBoxStyled checked={check} onClick={() => setChecked(!check)}/>
      </CheckBoxContainer>
      <MatterContainer>
        <MatterInfo>
          <MatterTitle>123</MatterTitle>
          <MatterDescription>
            fsgjsdtijg iosttjgiojghiot hioer thioerth ierthertj hhjherj hret
            fsgjsdtijg iosttjgiojghiot hioer thioerth ierthertj hhjherj hret
          </MatterDescription>
          <MatterDate>11.04.2020</MatterDate>
        </MatterInfo>
        <ButtonContainer>
          <div>
            <Button variant='contained'>Change</Button>
          </div>
          <div>
            <Button variant='contained' color='error'>Remove</Button>
          </div>
        </ButtonContainer>
      </MatterContainer>
    </ListItemContainer>
  );
};

export default ListItem;
