import { useState, useEffect } from 'react';
import CreateItemForm from './CreateItemForm';
import ItemList from './ItemList';

type Item = {
  text: string;
  date: string;
};

const Items = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('items') || '[]') as Item[];
    setItems(savedItems);
  }, []);

  const addItem = (item: Item) => {
    const newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const deleteItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const updateItem = (index: number, newText: string) => {
    const newItems = [...items];
    newItems[index].text = newText;

    // Atualize a data para a data atual
    newItems[index].date = new Date().toLocaleString('pt-BR');

    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };


  return (
    <div className="container mx-auto mt-2">
      <CreateItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} />
    </div>
  );
};

export default Items;
