import axios from 'axios'
import { Dispatch } from 'redux'
import { Action } from '../../constant/enum'
import { ActionType } from '../../typings/action'
// @global
import { GLOBAL } from '../../config'

const searchRepository = (term: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    dispatch({
      type: Action.SEARCH_REPOSITORY,
    })

    try {
      const { data } = await axios.get(GLOBAL.API_NPM, {
        params: {
          text: term,
        },
      })

      const names = data.objects.map((res: any) => {
        return res.package.name
      })

      dispatch({
        type: Action.SEARCH_REPOSITORY_SUCCESS,
        payload: names,
      })
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: Action.SEARCH_REPOSITORY_ERROR,
          payload: error.message,
        })
      }
    }
  }
}

export default searchRepository
