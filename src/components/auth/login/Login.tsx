import { FormEvent, useContext, useState } from 'react';
import TokenContext from '../../../context/TokenContext';
import useLogin from '../../../hook/mutations/auth/useLogin';
import { isEmailValid, isPasswordValid } from '../../../utils/auth/auth.util';
import EmailInput from '../shared/EmailInput';
import PasswordInput from '../shared/PasswordInput';

const Login = () => {
  const { saveToken } = useContext(TokenContext);
  const { mutate: login } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInputValid = isEmailValid(email) && isPasswordValid(password);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isInputValid) return;

    login(
      { email, password },
      {
        onSuccess: (data) => {
          if (data.token) {
            // 로그인 성공
            saveToken(data.token);
            return;
          }

          // 로그인 실패.
          alert(
            '로그인에 실패했습니다. 아이디와 비밀번호를 다시 확인 해 주세요.'
          );
        },
      }
    );
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="mb-10 flex justify-center text-3xl font-bold text-gray-800">
          로그인
        </div>
        <EmailInput value={email} onChange={setEmail} />
        <PasswordInput value={password} onChange={setPassword} />
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="flex items-center justify-between md:w-2/3">
            <button
              disabled={!isInputValid}
              className="focus:shadow-outline rounded bg-purple-500 py-2 px-4 font-bold text-white shadow focus:outline-none enabled:hover:bg-purple-400 disabled:bg-gray-400"
              type="submit"
            >
              로그인
            </button>
            <a
              className="inline-block align-baseline text-sm font-bold text-gray-500 hover:text-gray-700"
              href="/auth/signup"
            >
              아이디가 없으신가요?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
