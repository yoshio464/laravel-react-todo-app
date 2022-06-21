import React from "react"
import { Routers } from "./router"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
        mutations: {
            retry: false,
        }
    }
})

export const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <Routers />
        </QueryClientProvider>
    )
}
