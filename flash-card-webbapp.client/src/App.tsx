//Created Components
import BaseLayout from './components/layout/BaseLayout';
import Routing from './components/routing/Routing';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BaseLayout>
      <Routing />
    </BaseLayout>
  )
}

export default App;
