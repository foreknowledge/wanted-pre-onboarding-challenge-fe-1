import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import SignUp from './auth/Signup';
import { PATH_LOGIN, PATH_MAIN, PATH_SIGNUP } from './constants';
import NotFound from './todo/NotFound';
import TodoMain from './todo/TodoMain';

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
