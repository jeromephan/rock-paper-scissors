import { configureStore } from '@reduxjs/toolkit'
import choicesReducer from './modules/choices'

export default configureStore({
  reducer: {
    choices: choicesReducer
  }
})
