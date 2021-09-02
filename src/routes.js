import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import SellerPage from './pages/SellerPage/SellerPage'
import DowloadApp from './pages/DowloadApp/DowloadApp'
import HelpPage from './pages/HelpPage/HelpPage'
import NotifyPage from './pages/NotifyPage/NotifyPage'
import ProductPage from './pages/ProductPage/ProductPage'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/ban-hang',
        exact: false,
        main: () => <SellerPage />
    },
    {
        path: '/dowload-app',
        exact: false,
        main: () => <DowloadApp />
    },
    {
        path: '/help',
        exact: false,
        main: () => <HelpPage />
    },
    {
        path: '/notification',
        exact: false,
        main: () => <NotifyPage />
    },
    {
        path: '/product/:slug - :id',
        exact: false,
        main: ({match}) => <ProductPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },

]


export default routes