export interface IRepositoryState {
  loading: boolean
  error: string | null
  data: string[]
}

export interface IRepositoryAction {
  type: string
  payload?: string[]
}
