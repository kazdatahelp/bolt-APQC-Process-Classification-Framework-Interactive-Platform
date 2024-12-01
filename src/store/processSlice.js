import { createSlice } from '@reduxjs/toolkit'
    import { APQC_PROCESS_DATA } from '../data/apqcProcessData'

    const processSlice = createSlice({
      name: 'process',
      initialState: {
        selectedCategory: null,
        selectedSubcategory: null,
        processData: APQC_PROCESS_DATA
      },
      reducers: {
        selectCategory: (state, action) => {
          state.selectedCategory = action.payload
        },
        selectSubcategory: (state, action) => {
          state.selectedSubcategory = action.payload
        }
      }
    })

    export const { selectCategory, selectSubcategory } = processSlice.actions
    export default processSlice.reducer
