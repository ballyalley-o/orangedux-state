import { combineReducers } from 'redux'
import repositoryReducer from './repository'

const reducers = combineReducers({
  respository: repositoryReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
