import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRouter } from './routes/PrivateRouter';
import { PublicRouter } from './routes/PublicRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from './redux/thunks';
import { logoutThunk } from './redux/thunks';

const isAuth = false;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch]);
  
  const handleLogout = () => {
    dispatch(logoutThunk())
  }

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <button type='button' onClick={handleLogout}>Log out</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<PrivateRouter isAuth={isAuth} component={Home}/>} />
          <Route path='/login' element={<PublicRouter isAuth={isAuth} component={Login}/>} />
          <Route path='/register' element={<PublicRouter isAuth={isAuth} component={Register}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
