import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    // Simple store without RTK Query API slice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch