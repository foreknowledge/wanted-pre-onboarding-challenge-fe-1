import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/Signup';
import NotFound from './components/todo/shared/NotFound';
import TodoMain from './components/todo/TodoMain';
import {
  PATH_LOGIN,
  PATH_MAIN,
  PATH_SIGNUP,
} from './constants/routes/routes.constant';

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path={PATH_MAIN} element={<TodoMain />} />
          <Route path={PATH_LOGIN} element={<Login />} />
          <Route path={PATH_SIGNUP} element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
