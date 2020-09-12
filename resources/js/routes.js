import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CompanyHome from './components/Company/Home';
import CompanyAdd from './components/Company/Add';
import CompanyEdit from './components/Company/Edit';

export const routes = [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/company/home', component: CompanyHome, name: 'CompanyHome' },
    { path: '/company/add', component: CompanyAdd, name: 'CompanyAdd' },
    { path: '/company/edit/:id', component: CompanyEdit, name: 'CompanyEdit' },
];
