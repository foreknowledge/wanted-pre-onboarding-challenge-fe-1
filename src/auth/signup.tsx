import { PATH_LOGIN } from '../constants';
import LoginForm from './LoginForm';

const SignUp = () => {
  return (
    <LoginForm>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="flex items-center justify-between md:w-2/3">
          <button
            className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow hover:bg-purple-400 focus:outline-none"
            type="button"
          >
            회원 가입
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-gray-500 hover:text-gray-700"
            href={PATH_LOGIN}
          >
            이미 가입하셨나요?
          </a>
        </div>
      </div>
    </LoginForm>
  );
};

export default SignUp;
