import React, { useState } from 'react';

import { ButtonLeft, HideButtonContainer, ListContainer, MatterListContainer } from './MattersList.styled';
import ListItem from './ListItem/ListItem';
import { MatterListProps } from './MatterList.types';


const MatterList = ({ matters, deleteMatter, changeStatus, changeMatter }: MatterListProps) => {
  const [hide, setHide] = useState(false);

  const activeMatters = matters.filter((one) => one.active);
  const nonActiveMatters = matters.filter((one) => !one.active);

  return (
    <MatterListContainer>
      <HideButtonContainer>
        <ButtonLeft
          disabled={!matters.length || !nonActiveMatters.length}
          variant='contained'
          onClick={() => setHide(!hide)}
        >
          {hide? 'Show solved' : 'Hide solved'}
        </ButtonLeft>
      </HideButtonContainer>
      <ListContainer>
        {(hide ? activeMatters.length : matters.length) ? matters.map((one) => (
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
            changeMatter={changeMatter}
          />
        )) : <div>{hide ? 'You do not have active matters' : 'You dont have matters at all'}</div>
        }
      </ListContainer>
    </MatterListContainer>
  );
}

export default MatterList;
