import App from './src/components/App'

const ROOT = 'package-finder-root'
const AppContainer = document.createElement('div')
const SearchInput = document.querySelector('.js-site-search')

AppContainer.id = ROOT
SearchInput.parentNode.insertBefore(AppContainer, SearchInput.nextSibling)

new App({
  target: document.getElementById(ROOT)
})
