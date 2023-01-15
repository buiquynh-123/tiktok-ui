// Layouts
import {HeaderOnly} from '~/component/Layouts'
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const pulicRoutes = [
    // cái dùng cho những route không đăng nhập vẫn xem được
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        layout: null,
    },
];
const privateRoutes = [
    // cái dùng cho những route phải đăng nhập mới xem được, còn ko đăng nhập thì chuyển sang form login
];
export { pulicRoutes, privateRoutes };
