import {
  SearchRepositoryAction,
  SearchRepositorySuccessAction,
  SearchRepositoryErrorAction,
} from '@interface/reducer'

export type ActionType =
  | SearchRepositoryAction
  | SearchRepositorySuccessAction
  | SearchRepositoryErrorAction
