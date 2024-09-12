// AppRoutes will handle all the App routes for the webb app
// Created Imports
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
        Element: <HomePage />,
    },
    {
        path: '/decks',
        Element:  <DecksPage />,
    },
    {
        path: '/login',
        Element:  <LoginPage />,
    },
    {
        path: '/cards/:id',
        Element: <CardPage />,
    },
    {
        path: '/create/:id',
        Element: <CreatePage />,
    },
    {
        path: '/create/text/:id',
        Element: <StringCardForm />,
    },
    {
        path: '/create/option/:id',
        Element: <OptionCardForm />,
    }
];

export default AppRoutes;