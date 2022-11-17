import React, { useCallback, useEffect, useState } from 'react';

import { PageBox } from '../Page.styled';
import { TodoContainer } from './Todo.styled';
import PageHeader from '../../components/PageHeader/PageHeader';
import MatterList from '../../components/MatterList/MatterList';

import { userSelector } from '../../redux/selectors/user.selector';
import { matterSelector } from '../../redux/selectors/matter.selector';
import { getAllMatters } from '../../redux/reducers/Matter/matter.requests';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';
import { useChangeStatus, useDeleteMatter, useNewMatterChanger, useNewMatterCreator } from './Todo.hooks';
import MatterAddition from '../../components/MatterAddition/MatterAddition';


const Todo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);
  const { matters } = useAppSelector(matterSelector);

  const [openModalAddition, setOpenModal] = useState<boolean>(false);
  const [openModalEdition, setOpenEditionModal] = useState<boolean>(false);
  const [changingMatter, setChangingMatter] = useState<string>('');

  const deleteMatter = useDeleteMatter();
  const changeStatus = useChangeStatus();
  const changeMatter = useNewMatterChanger(changingMatter);

  const openCloseModal = useCallback(() => setOpenModal(!openModalAddition), [openModalAddition]);
  const closeChangeModal = useCallback(() => {
    setChangingMatter('');
    setOpenEditionModal(!openModalEdition)
  }, [openModalEdition]);
  const openChangeModal = useCallback((id: string) => {
    setChangingMatter(id)
    setOpenEditionModal(!openModalEdition)
  }, [openModalEdition]);
  const createNewMatter = useNewMatterCreator(user.id);
  const matter = matters.find((one) => one.id === changingMatter)

  useEffect(() => {
    if (user.id) dispatch(getAllMatters(user.id));
  }, [user.id]);

  return (
    <PageBox>
      <TodoContainer>
        <PageHeader
          title='All Matters To do'
          buttonText='Add matter'
          buttonFunction={openCloseModal}
        />
        <MatterList
          matters={matters}
          deleteMatter={deleteMatter}
          changeStatus={changeStatus}
          changeMatter={openChangeModal}
        />
      </TodoContainer>
      <MatterAddition
        title='Add Matter'
        submitBtnText='Add'
        open={openModalAddition}
        openClose={openCloseModal}
        submition={createNewMatter}
      />
      <MatterAddition
        title='Edit Matter'
        submitBtnText='Edit'
        open={openModalEdition}
        openClose={closeChangeModal}
        submition={changeMatter}
        customValues={matter}
      />
    </PageBox>
  );
}

export default Todo;
