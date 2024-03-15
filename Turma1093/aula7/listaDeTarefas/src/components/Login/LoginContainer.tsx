import { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";

import logoItau from './assets/logo.png';
import ErrorCredentials from './assets/wrong.svg';

const LoginContainer: React.FC = () => {
  const [username, setUsername] = useState("demonstracao@itau.com.br");
  const [password, setPassword] = useState("demonstracao");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logged") !== null) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (username == 'demonstracao@itau.com.br' && password == 'demonstracao') {
      localStorage.setItem("user", "Demonstração");
      localStorage.setItem("userId", username);
      localStorage.setItem("logged", "true");
      setUsername("");
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="drop-shadow-xl bg-white  p-8 rounded-lg shadow-lg shadow-blue-500/40 w-96 z-10">
      <div className="mb-4 flex justify-center">
        <img
          src={logoItau} // Substitua pelo caminho do seu logo
          alt="Logo"
          className="rounded-full shadow-lg shadow-blue-500/40 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="text"
            id="username"
            className="w-full border p-2 rounded-lg"
            placeholder="Digite: demonstracao@itau.com.br"
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={username}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Senha</label>
          <input
            type="password"
            id="password"
            className="w-full border p-2 rounded-lg"
            placeholder="Digite: demonstracao"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
          />
        </div>
        {error && (
          <div className="text-center mt-8">
            <p className='mt-3 text-1xl font-semibold text-red-800'>Credenciais inválidas. Tente novamente.</p>
            <img src={ErrorCredentials} alt="Nenhuma tarefa encontrada" className="mx-auto w-36 h-36" />

          </div>
        )}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition duration-300"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default LoginContainer;