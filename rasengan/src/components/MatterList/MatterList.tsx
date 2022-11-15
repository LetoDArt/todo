import React, { useState } from 'react';

import { ButtonLeft, HideButtonContainer, ListContainer, MatterListContainer } from './MattersList.styled';
import ListItem from './ListItem/ListItem';
import { MatterListProps } from './MatterList.types';


const MatterList = ({ matters, deleteMatter, changeStatus }: MatterListProps) => {
  const [hide, setHide] = useState(false);

  return (
    <MatterListContainer>
      <HideButtonContainer>
        <ButtonLeft
          variant='contained'
          onClick={() => setHide(!hide)}
        >
          {hide? 'Show solved' : 'Hide solved'}
        </ButtonLeft>
      </HideButtonContainer>
      <ListContainer>
        {matters.map((one) => (
          <ListItem
            key={one.id}
            id={one.id}
            hide={hide}
            title={one.name}
            description={one.text}
            date={one.dateOfCreation}
            checked={!one.active}
            deleteMatter={deleteMatter}
            changeStatus={changeStatus}
          />
        ))}
      </ListContainer>
    </MatterListContainer>
  );
}

export default MatterList;
