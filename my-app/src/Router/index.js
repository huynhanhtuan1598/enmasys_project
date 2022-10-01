//Pages
import Header from '../components/page/Header';
import Category_home from '../components/page/Page_category/Category_home';

const publicRoutes = [
    {path: '/', component: Header}, // này là trang chủ
    {path: '/Category_home', component: Category_home},//trang category
]

const privateRoutes = []

export {publicRoutes, privateRoutes}