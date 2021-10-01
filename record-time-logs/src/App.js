import { AuthProvider } from './context/AuthContext';
import { TimeLogsProvider} from './context/TimeLogsContext'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Login from './pages/AuthPage/LoginPage'
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TimeLogsProvider>
          <Switch>
            <Route path='/'  component={Home} exact/>
            <Route path='/login' component={Login} exact/>
          </Switch>
        </TimeLogsProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;