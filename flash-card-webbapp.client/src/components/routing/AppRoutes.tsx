// AppRoutes will handle all the App routes for the webb app
// Created Imports
import HomePage from '../../pages/HomePage';
import CardPage from '../../pages/card/CardPage';
import DecksPage from '../../pages/deck/DeckPage';
import LoginPage from '../../pages/login/LoginPage';

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
    }
];

export default AppRoutes;