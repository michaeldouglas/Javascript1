import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Exit from './assets/close.svg';

import logoItau from '../Login/assets/logo.png';

type ThemeProps = {
  children: ReactNode;
  title: string;
};

const Theme: React.FC<ThemeProps> = ({ children, title }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(user);
    }
  }, []);

  const ExitDash = () => {
    setIsModalOpen(true);
  };

  const handleConfirmExit = () => {
    setIsModalOpen(false);
    localStorage.removeItem('userId');
    localStorage.removeItem('logged');
    navigate("/");
  };

  const handleCancelExit = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-orange-500 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logoItau} alt="Logo" className="w-14 h-14 mr-4" />
        </div>
        <div className="text-white text-2xl font-semibold">
          {username && (
            <span className="hidden sm:inline">Bem vindo: {username}</span>
          )}
          {username && (
            <button
              onClick={ExitDash}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Sair
            </button>
          )}
        </div>
      </header>

      <div className="container mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4">
        <h1 className="text-4xl font-semibold text-gray-800">{title}</h1>
        {children}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">


            <div className="text-center mt-8">
              <img src={Exit} alt="Nenhuma tarefa encontrada" className="mx-auto w-64 h-64" />
              <p className='mt-3 text-1xl font-semibold text-gray-800'>Tem certeza de que deseja sair?</p>
            </div>

            <div className="mt-4">
              <button
                onClick={handleConfirmExit}
                className="bg-red-500 text-white px-4 py-2 rounded hover-bg-red-600 mr-2"
              >
                Sair
              </button>
              <button
                onClick={handleCancelExit}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover-bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Theme;
