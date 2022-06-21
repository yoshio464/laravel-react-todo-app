import React from "react"
import { Routers } from "./router"
import { QueryClient, QueryClientProvider } from 'react-query'

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
            <Routers />
        </QueryClientProvider>
    )
}
