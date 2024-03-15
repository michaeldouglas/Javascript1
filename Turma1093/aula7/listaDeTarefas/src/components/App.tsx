import { useEffect } from "react";
import { useNavigate } from "react-router";
import Theme from "./theme/Theme"
import Items from "./Items";

const App: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logged") === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Theme title="Lista de Tarefas">
      <Items />
    </Theme>
  )
}

export default App
