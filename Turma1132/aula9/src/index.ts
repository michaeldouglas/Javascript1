import page from 'page'
import { render as renderLogin } from './components/login'
import { render as renderHome } from './components/home'

// Rotas
page('/', renderLogin)
page('/login', renderLogin)
page('/home', renderHome)

//Iniciar as rotas
page()

// Chama a nossa função para controler de rotas
// Não é isso que eu quero index.html?page=/ eu quero isso: /
// /login
// /home
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => page())
}
