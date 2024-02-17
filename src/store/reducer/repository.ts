import { IRepositoryState } from '../../interface/repository-reducer'
import { ActionType } from '../../typings/action'
import { Action } from '../../constant/enum'

const initialState: IRepositoryState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (
  state: IRepositoryState = initialState,
  action: ActionType
): IRepositoryState => {
  switch (action.type) {
    case Action.SEARCH_REPOSITORY:
      return { loading: true, error: null, data: [] }
    case Action.SEARCH_REPOSITORY_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case Action.SEARCH_REPOSITORY_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer
