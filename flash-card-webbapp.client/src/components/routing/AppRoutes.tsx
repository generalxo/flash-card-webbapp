// AppRoutes will handle all the App routes for the webb app
// Created Imports
import HomePage from '../../pages/HomePage';
import DecksPage from '../../pages/DecksPage';
import CreateDeckPage from '../../pages/CreateDeckPage';

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
        path: '/createDeck',
        Element:  <CreateDeckPage />,
    }
];

export default AppRoutes;