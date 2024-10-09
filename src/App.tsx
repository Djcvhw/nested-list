import React from 'react';
import styled from 'styled-components';
import { useNestedList } from './hooks/useNestedList';
import ListItemComponent from './components/ListItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const App: React.FC = () => {
  const { list, addChild, deleteItem, editItem } = useNestedList();

  return (
    <Container>
      <h1>Nested List</h1>
      <ListItemComponent item={list} onAddChild={addChild} onDelete={deleteItem} onEdit={editItem} />
    </Container>
  );
};

export default App;
