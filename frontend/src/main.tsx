import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { LibraryPage } from '#pages/library-page'
import { LessonPage } from '#pages/lesson-page'
import { AppShell } from '#components/app-shell'
import { AuthPage } from '#pages/auth-page'
import { getToken } from '#lib/api'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <LibraryPage /> },
      { path: 'learn/:planId', element: <LessonPage /> }
    ]
  }
])

function App() {
  const [authenticated, setAuthenticated] = useState(() => !!getToken())

  if (!authenticated) {
    return <AuthPage onAuthenticated={() => setAuthenticated(true)} />
  }

  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
