import { useRoutes, BrowserRouter } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import './App.css'

// Define your routes
function AppRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />
    },
    {
      path: "/new", 
      element: <AddCreator />
    },
    {
      path: "/edit/:id",
      element: <EditCreator />
    },
    {
      path: "/view/:id",
      element: <ViewCreator />
    }
  ])

  return element
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Beautiful wave overlay */}
        <div className="wave-overlay"></div>
        
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App