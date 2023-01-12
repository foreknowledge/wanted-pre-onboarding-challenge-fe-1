import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../../api/auth/auth.api';
import useBlockLoginUser from '../../../hook/useBlockLoginUser';
import EmailInput from '../shared/EmailInput';
import { isEmailValid, isPasswordValid } from '../../../utils/auth/auth.util';
import PasswordInput from '../shared/PasswordInput';
import {
  PATH_LOGIN,
  PATH_MAIN,
} from '../../../constants/routes/routes.constant';
import { setLoginToken } from '../../../utils/token/token.util';

const SignUp = () => {
  useBlockLoginUser();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isInputValid = isEmailValid(email) && isPasswordValid(password);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isInputValid) return;

    signup({ email, password }).then((data) => {
      if (data.token) {
        // 가입 성공
        alert(data.message);
        setLoginToken(data.token);
        navigate(PATH_MAIN);
        return;
      }

      // 가입 실패.
      alert('이미 존재하는 사용자 입니다.');
    });
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="mb-10 flex justify-center text-3xl font-bold text-gray-800">
        회원 가입
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
            가입하기
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-gray-500 hover:text-gray-700"
            href={PATH_LOGIN}
          >
            이미 가입하셨나요?
          </a>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
