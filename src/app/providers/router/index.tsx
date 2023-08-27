import { Suspense, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routerConfig } from './config';

export const Router = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<p>Loading...</p>}>{route.element}</Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{routerConfig.map(renderWithWrapper)}</Routes>;
};
