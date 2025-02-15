import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Created Components
import AppRoutes from './AppRoutes';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {AppRoutes.map((route, index) => {
                    if (route.index) {
                    return <Route key={index} path="/" element={route.element} />;
                    } else {
                    return <Route key={index} path={route.path} element={route.element} />;
                    }
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;