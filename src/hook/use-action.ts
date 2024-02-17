import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { action } from '../store'

const useAction = () => {
  const dispatch = useDispatch()

  return bindActionCreators(action, dispatch)
}

export default useAction
