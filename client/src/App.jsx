import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Home, Login, Product, Signup } from "./pages"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Outlet />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/product' element={<Product />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
