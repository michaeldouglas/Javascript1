import createHeading from '../shared/createHeading'
import './styles/login.css'

export const render = () => {
  const appContainer = document.getElementById('app')

  if (appContainer) {
    const loginModule = document.createElement('div')
    loginModule.appendChild(createHeading('Modulo de login - [MUDAR]'))

    appContainer.innerHTML = ''
    appContainer.appendChild(loginModule)
  }
}
