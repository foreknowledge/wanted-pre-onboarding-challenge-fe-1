import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/login';
import SignUp from './auth/signup';
import NotFound from './todo/NotFound';
import TodoMain from './todo/TodoMain';

const App = () => {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
