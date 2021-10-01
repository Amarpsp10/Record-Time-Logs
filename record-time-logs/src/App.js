import { AuthProvider } from './context/AuthContext';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Login from './pages/AuthPage/LoginPage'
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <AuthProvider>
         <Switch>
          <Route path='/'  component={Home} exact/>
          <Route path='/login' component={Login} exact/>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;