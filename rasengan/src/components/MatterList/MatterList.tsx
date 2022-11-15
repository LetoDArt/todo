import React from 'react';

import { ButtonLeft, HideButtonContainer, ListContainer, MatterListContainer } from './MattersList.styled';
import ListItem from './ListItem/ListItem';


const MatterList = () => (
    <MatterListContainer>
      <HideButtonContainer>
        <ButtonLeft
          variant='contained'
        >
          Hide solved
        </ButtonLeft>
      </HideButtonContainer>
      <ListContainer>
        <ListItem />
        <ListItem />
        <ListItem />
      </ListContainer>
    </MatterListContainer>
  );

export default MatterList;
