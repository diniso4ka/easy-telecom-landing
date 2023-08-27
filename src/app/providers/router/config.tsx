import { MainPage } from 'pages/main';
import { MAIN_PAGE_ROUTE } from 'shared/consts/routes';
import { RouteProps } from 'react-router-dom';

export const routerConfig: RouteProps[] = [
    {
        path: MAIN_PAGE_ROUTE,
        element: <MainPage />,
    },
];
