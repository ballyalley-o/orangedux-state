import { Action } from '@constant/enum'

export interface SearchRepositoryAction {
  type: Action.SEARCH_REPOSITORY
}

export interface SearchRepositorySuccessAction {
  type: Action.SEARCH_REPOSITORY_SUCCESS
  payload: string[]
}

export interface SearchRepositoryErrorAction {
  type: Action.SEARCH_REPOSITORY_ERROR
  payload: string
}
