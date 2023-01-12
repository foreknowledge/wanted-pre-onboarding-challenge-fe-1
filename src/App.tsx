import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/login/Login';
import SignUp from './components/auth/signup/Signup';
import NotFound from './components/todo/shared/NotFound';
import TodoMain from './components/todo/TodoMain';

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoMain />} />
          <Route path="/todos/:todoId" element={<TodoMain />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
