import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/Signup';
import NotFound from './components/todo/shared/NotFound';
import AuthTodoMain from './components/todo/AuthTodoMain';
import TonkenProvider from './context/TokenProvider';
import Authorized from './router/Authorized';
import UnAuthorized from './router/UnAuthorized';

const App = () => {
  return (
    <BrowserRouter>
      <TonkenProvider>
        <Routes>
          <Route element={<Authorized />}>
            <Route path="/" element={<AuthTodoMain />} />
            <Route path="/todos/:todoId" element={<AuthTodoMain />} />
          </Route>
          <Route element={<UnAuthorized />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TonkenProvider>
    </BrowserRouter>
  );
};

export default App;
