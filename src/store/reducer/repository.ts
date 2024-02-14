import {
  SearchRepositoryAction,
  SearchRepositorySuccessAction,
  SearchRepositoryErrorAction,
} from '@interface/reducer'
import {
  IRepositoryState,
  IRepositoryAction,
} from '@interface/repository-reducer'

const reducer = (
  state: IRepositoryState,
  action: IRepositoryAction
): IRepositoryState => {
  switch (action.type) {
    case 'search_repository':
      return { loading: true, error: null, data: [] }
    case 'search_repository_success':
      return { loading: false, error: null, data: action.payload as string[] }
    case 'search_repository_error':
      return { loading: false, error: null, data: [] }
    default:
      return state
  }
}

export default reducer
