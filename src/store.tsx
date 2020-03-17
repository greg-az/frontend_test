import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const enhancers: never[] = []
const middleware = [
  thunk
]

const initialState = {}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
) 

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers as any
)

export default store