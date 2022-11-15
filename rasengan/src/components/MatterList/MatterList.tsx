import React from 'react';

import { ButtonLeft, HideButtonContainer, ListContainer, MatterListContainer } from './MattersList.styled';
import ListItem from './ListItem/ListItem';
import { MatterListProps } from './MatterList.types';


const MatterList = ({ matters }: MatterListProps) => (
    <MatterListContainer>
      <HideButtonContainer>
        <ButtonLeft
          variant='contained'
        >
          Hide solved
        </ButtonLeft>
      </HideButtonContainer>
      <ListContainer>
        {matters.map((one) => (
          <ListItem
            key={one.id}
            title={one.name}
            description={one.text}
            date={one.dateOfCreation}
            checked={!one.active}
          />
        ))}
      </ListContainer>
    </MatterListContainer>
  );

export default MatterList;
