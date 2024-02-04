import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Created Components
import AppRoutes from './AppRoutes';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                {AppRoutes.map((route, index) => {
                    if (route.index) {
                    return <Route key={index} path="/" element={route.Element} />;
                    } else {
                    return <Route key={index} path={route.path} element={route.Element} />;
                    }
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
