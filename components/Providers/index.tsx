'use client'
import { store } from "@/store"
import { Provider } from 'react-redux'
import { persistor } from '@/store/index'
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}