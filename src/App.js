import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contact } from './pages/Contact';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';
import { AppBar } from './components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from './redux/auth/thunks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isError = useSelector(state => state.auth.error);
  
  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast('Incorrect login or password');
    }
  }, [isError]);

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
      <ToastContainer />
    </div>
  );
}

export default App;
