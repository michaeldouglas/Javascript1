import './styles/home.css'

export const render = () => {
  const appContainer = document.getElementById('app')
  if (appContainer) {
    appContainer.innerHTML = '<h1 class="outro">Home Module</h1>'
  }
}
