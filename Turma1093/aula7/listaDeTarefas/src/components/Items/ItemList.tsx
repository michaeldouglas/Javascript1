import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { DateTime } from "luxon";

type Item = {
  text: string;
  date: string;
};

type ItemListProps = {
  items: Item[];
  deleteItem: (index: number) => void;
  updateItem: (index: number, newText: string) => void;
};

import NotFound from './assets/not_found.svg';

const ItemList: React.FC<ItemListProps> = ({ items, deleteItem, updateItem }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditedText(items[index].text);
  };

  const handleUpdate = (index: number) => {
    if (editedText) {
      updateItem(index, editedText);
      setEditIndex(null);
    }
  };

  const getClockColor = (dateString: string) => {
    const savedDate = DateTime.fromFormat(dateString, "dd/MM/yyyy, HH:mm:ss");
    const currentDate = DateTime.local();
    const diffInMinutes = currentDate.diff(savedDate, "minutes").toObject().minutes || 0;

    if (diffInMinutes >= Number(import.meta.env.VITE_END_CLOCK)) {
      return "text-red-500";
    } else if (diffInMinutes >= Number(import.meta.env.VITE_START_CLOCK)) {
      return "text-yellow-500";
    } else {
      return "text-green-500";
    }
  };

  const sortedItems = items.slice().sort((a, b) => {
    const dateA = DateTime.fromFormat(a.date, "dd/MM/yyyy, HH:mm:ss").toMillis();
    const dateB = DateTime.fromFormat(b.date, "dd/MM/yyyy, HH:mm:ss").toMillis();
    return dateB - dateA;
  });

  return (
    <div>
      {items.length === 0 ? (
        <div className="text-center mt-8">
          <img src={NotFound} alt="Nenhuma tarefa encontrada" className="mx-auto w-64 h-64" />
          <p className='mt-3 text-1xl font-semibold text-gray-800'>Desculpe mas não encontrei nenhuma tarefa!</p>
        </div>
      ) : (
        <>
          <div>
            <hr />
            <p className='mt-3 text-1xl font-semibold text-gray-800'>
              Política de tolerância das tarefas:
              <br />
              <FontAwesomeIcon icon={faClock} className={`text-green-500 mr-2`} /> Você tem <strong>5 minutos para resolver a tarefa.</strong>
              <br />
              <FontAwesomeIcon icon={faClock} className={`text-yellow-500 mr-2`} /> Você ultrapassou <strong>{Number(import.meta.env.VITE_START_CLOCK)} minutos.</strong>
              <br />
              <FontAwesomeIcon icon={faClock} className={`text-red-500 mr-2`} /> Você ultrapassou <strong>{Number(import.meta.env.VITE_END_CLOCK)} minutos e encontra-se atrasado!</strong>
            </p>
            <br />
            <hr />
            <br />
          </div>
          <ul>
            {sortedItems.map((item, index) => (
              <li key={index} className="flex items-center justify-between p-2 border-b">
                {index === editIndex ? (
                  <input
                    className="flex-1 rounded border p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                ) : (
                  <div className="flex flex-col">

                    <div>Tarefa: {item.text}</div>
                    <div>{item.date} <FontAwesomeIcon icon={faClock} className={`${getClockColor(item.date)} mr-2`} /></div>
                  </div>
                )}
                <div>
                  {index === editIndex ? (
                    <button
                      onClick={() => handleUpdate(index)}
                      className="bg-orange-500 text-white p-2 mr-2 rounded hover-bg-orange-600"
                    >
                      Salvar
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-blue-500 text-white p-2 rounded hover-bg-blue-600 mr-2"
                    >
                      Editar
                    </button>
                  )}
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 text-white p-2 rounded hover-bg-red-600"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>

      )}
    </div>
  );
};

export default ItemList;
