import { configureStore } from '@reduxjs/toolkit'
    import processReducer from './processSlice'
    import recommendationReducer from './recommendationSlice'

    export const store = configureStore({
      reducer: {
        process: processReducer,
        recommendation: recommendationReducer
      },
      middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
          serializableCheck: false
        })
    })
