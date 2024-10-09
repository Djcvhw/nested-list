import React, { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from '../types/ListItem';
import Button from './Button';

const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  border-left: 1px solid #ccc;
`;

const ListItemStyled = styled.li`
  margin: 10px 0;
`;

type ListItemComponentProps = {
    item: ListItem;
    onAddChild: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newName: string) => void;
};

const ListItemComponent: React.FC<ListItemComponentProps> = ({ item, onAddChild, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(item.id, newName);
        }
        setIsEditing(!isEditing);
    };

    return (
        <ListItemStyled>
            {isEditing ? (
                <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            ) : (
                item.name
            )}
            <Button onClick={() => onAddChild(item.id)}>Add child</Button>
            {item.id !== 1 && <Button onClick={() => onDelete(item.id)}>Delete</Button>}
            <Button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</Button>
            {item.children.length > 0 && (
                <ListContainer>
                    {item.children.map((child: ListItem) => (
                        <ListItemComponent
                            key={child.id}
                            item={child}
                            onAddChild={onAddChild}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </ListContainer>
            )}
        </ListItemStyled>
    );
};

export default ListItemComponent;
