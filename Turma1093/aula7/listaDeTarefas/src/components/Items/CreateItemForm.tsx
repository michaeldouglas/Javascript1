import { useState } from 'react';

type Item = {
  text: string;
  date: string; // Aqui você pode manter a data no formato brasileiro
};

type CreateItemFormProps = {
  addItem: (item: Item) => void;
};

const CreateItemForm: React.FC<CreateItemFormProps> = ({ addItem }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (text) {
      const newItem: Item = { text, date: new Date().toLocaleString('pt-BR') };
      addItem(newItem);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4 mb-4 flex'>
      <input
        type="text"
        placeholder="Novo item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded border p-2 mr-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button type="submit" className="bg-orange-500 text-white p-2 rounded">Adicionar</button>
    </form>
  );
};

export default CreateItemForm;
