import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../typings'
// import reducers from '../store/reducer'

// export type RootState = ReturnType<typeof reducers>

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
