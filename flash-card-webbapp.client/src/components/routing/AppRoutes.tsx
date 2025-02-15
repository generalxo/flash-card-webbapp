import HomePage from '../../pages/HomePage';
import CardPage from '../../pages/card/CardPage';
import CreatePage from '../../pages/create/CreatePage';
import DecksPage from '../../pages/deck/DeckPage';
import LoginPage from '../../pages/login/LoginPage';
import StringCardForm from '../../pages/create/StringCardForm';
import OptionCardForm from '../../pages/create/OptionCardForm';

const AppRoutes = [
    {
        index: true,
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/decks',
        element:  <DecksPage />,
    },
    {
        path: '/login',
        element:  <LoginPage />,
    },
    {
        path: '/cards/:id',
        element: <CardPage />,
    },
    {
        path: '/create/:id',
        element: <CreatePage />,
    },
    {
        path: '/create/text/:id',
        element: <StringCardForm />,
    },
    {
        path: '/create/option/:id',
        element: <OptionCardForm />,
    }
];

export default AppRoutes;