import './App.css';
import Forgot from './Pages/Forgot';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Dashboard'
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div>
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;
