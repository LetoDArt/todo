import React, { useEffect } from 'react';

import { PageBox } from '../Page.styled';
import { TodoContainer } from './Todo.styled';
import PageHeader from '../../components/PageHeader/PageHeader';
import MatterList from '../../components/MatterList/MatterList';

import { userSelector } from '../../redux/selectors/user.selector';
import { matterSelector } from '../../redux/selectors/matter.selector';
import { getAllMatters } from '../../redux/reducers/Matter/matter.requests';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux.hooks';


const Todo = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);
  const { matters } = useAppSelector(matterSelector)

  useEffect(() => {
    if (user.id) dispatch(getAllMatters(user.id));
  }, [user.id]);

  return (
    <PageBox>
      <TodoContainer>
        <PageHeader
          title='All Matters To do'
          buttonText='Add matter'
          buttonFunction={() => true}
        />
        <MatterList matters={matters} />
      </TodoContainer>
    </PageBox>
  );
}

export default Todo;
