// AppRoutes will handle all the App routes for the webb app
// Created Imports
import HomePage from '../../pages/HomePage';
import DecksPage from '../../pages/DecksPage';

const AppRoutes = [
    {
        index: true,
        path: '/',
        Element: <HomePage />,
    },
    {
        path: '/decks',
        Element:  <DecksPage />,
    }
];

export default AppRoutes;