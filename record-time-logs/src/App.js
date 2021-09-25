import { AuthProvider } from './context/AuthContext';

import AuthPage from './pages/AuthPage'
import Navigation from './components/navigation/Navigation'
import Home from './pages/HomePage/Home';

function App() {
  return (
      <AuthProvider>
         <Navigation/>
         <Home/>
         <AuthPage/>
      </AuthProvider>
  );
}

export default App;