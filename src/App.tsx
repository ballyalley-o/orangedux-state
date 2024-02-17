import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { RepoList } from './component'
// @global
import { GLOBAL } from './config'

const App = () => {
  useEffect(() => {
    document.title = GLOBAL.APP_TITLE
  })

  return (
    <Provider store={store}>
      <div>
        <h1> Search for a NPM Package</h1>
        <RepoList />
      </div>
    </Provider>
  )
}

export default App
