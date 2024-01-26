import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routers"

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
