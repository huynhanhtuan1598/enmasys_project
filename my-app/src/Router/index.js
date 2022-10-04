//Pages
import Header from '../components/page/Header';
import Category_home from '../components/page/Page_category/Category_home';
import Product_detail_page from '../components/page/Product/Product_detail_page';

const publicRoutes = [
    {path: '/', component: Header}, // này là trang chủ
    {path: '/Category_home', component: Category_home},//trang category
    {path: '/Product_detail_page', component: Product_detail_page},//trang category
]

const privateRoutes = []

export {publicRoutes, privateRoutes}