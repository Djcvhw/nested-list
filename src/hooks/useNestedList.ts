import { useState } from "react";
import { ListItem } from "../types/ListItem";

const initialList: ListItem = {
  id: 1,
  name: "Main Parent",
  children: [],
};

export const useNestedList = () => {
  const [list, setList] = useState<ListItem>(initialList);

    const addChild = (id: number) => {
      const date = Date.now()
    const newChild: ListItem = {
      id: date ,
      name: `Child ${date}`,
      children: [],
    };

    const addChildRecursive = (items: ListItem): ListItem => {
      if (items.id === id) {
        return { ...items, children: [...items.children, newChild] };
      }
      return { ...items, children: items.children.map(addChildRecursive) };
    };

    setList(addChildRecursive(list));
  };

  const deleteItem = (id: number) => {
    const deleteRecursive = (items: ListItem): ListItem => {
      return {
        ...items,
        children: items.children.filter((child) => child.id !== id).map(deleteRecursive),
      };
    };

    setList(deleteRecursive(list));
  };

  const editItem = (id: number, newName: string) => {
    const editRecursive = (items: ListItem): ListItem => {
      if (items.id === id) {
        return { ...items, name: newName };
      }
      return { ...items, children: items.children.map(editRecursive) };
    };

    setList(editRecursive(list));
  };

  return {
    list,
    addChild,
    deleteItem,
    editItem,
  };
};
