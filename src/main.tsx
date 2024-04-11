import React, { ErrorInfo } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'
import { AuthProvider } from './contexts/authContext'


const queryClient = new QueryClient({ queryCache: new QueryCache({}) })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={(e: Error, info: ErrorInfo) => { console.error(`Caught an error: ${e}`, info) }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} >
          </RouterProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
