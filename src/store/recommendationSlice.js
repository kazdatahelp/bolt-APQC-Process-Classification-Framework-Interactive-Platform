import { createSlice } from '@reduxjs/toolkit'

    const recommendationSlice = createSlice({
      name: 'recommendation',
      initialState: {
        recommendations: [],
        loading: false,
        error: null
      },
      reducers: {
        setRecommendations: (state, action) => {
          state.recommendations = action.payload
        },
        setLoading: (state, action) => {
          state.loading = action.payload
        },
        setError: (state, action) => {
          state.error = action.payload
        }
      }
    })

    export const { 
      setRecommendations, 
      setLoading, 
      setError 
    } = recommendationSlice.actions
    export default recommendationSlice.reducer
