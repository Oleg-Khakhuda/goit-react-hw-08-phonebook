import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { AppBar } from './components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from './redux/auth/thunks';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav>
          <AppBar />
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<PublicRoute component={Home} />} />
          <Route path='/login' element={<PublicRoute component={Login} />} />
          <Route path='/register' element={<PublicRoute component={Register} />} />
          <Route path='/contacts' element={<PrivateRoute component={Contact} />} />
          
        </Routes>
      </main>
    </div>
  );
}

export default App;
