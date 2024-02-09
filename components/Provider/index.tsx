'use client'
import { store } from "@/store"
import { Provider } from 'react-redux'
import { persistor } from '@/store/index'
import { PersistGate } from "redux-persist/integration/react"


const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider