//Created Components
import BaseLayout from './components/layout/BaseLayout';
import Routing from './components/routing/Routing';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { UserProvider } from './context/useAuthentication';

function App() {
	return (
		<>
			<UserProvider>
				<ToastContainer />
				<BaseLayout>
					<Routing />
				</BaseLayout>
			</UserProvider>
		</>
	);
};

export default App;