import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'
import NavBar from '../../components/NavBar'
import { ShoppingCartProvider } from '../../Context'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sing-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
