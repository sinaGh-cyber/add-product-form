import DefaultLayout from 'layouts/Default'
import AddProduct from 'pages/add-product'

const indexRoutes = [{ path: '/', component: DefaultLayout }]

const AppRoutes = [
  {
    path: '/add-product',
    name: 'افزودن محصول',
    icon: 'fa fa-plus',
    component: AddProduct,
    private: true,
    showInNav: true,
  },
  { path: '/', pathTo: '/add-product', name: 'Dashboard', redirect: true },
]

export default AppRoutes

export { indexRoutes }
