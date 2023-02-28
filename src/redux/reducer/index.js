import { combineReducers } from '@reduxjs/toolkit'
import user from './user'



const appReducer = combineReducers({
  user,
})


const rootReducer = (state, action) => {
  // if (action.type === 'user/logout') {
  //   state = undefined
  // }
  return appReducer(state, action)
}

export default rootReducer;
