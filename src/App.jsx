import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ViewItemById from './pages/ViewItemById'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/item/:itemId',
    element: <ViewItemById/>
  }
])

function App() {
  
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
