import React from 'react';

import { PageBox } from '../Page.styled';
import { TodoContainer } from './Todo.styled';
import PageHeader from '../../components/PageHeader/PageHeader';
import MatterList from '../../components/MatterList/MatterList';


const Todo = () => (
  <PageBox>
    <TodoContainer>
      <PageHeader
        title='All Matters To do'
        buttonText='Add matter'
        buttonFunction={() => true}
      />
      <MatterList />
    </TodoContainer>
  </PageBox>
);

export default Todo;
