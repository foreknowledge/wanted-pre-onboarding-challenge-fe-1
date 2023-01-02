import { ReactElement } from 'react';

const LoginForm = ({ children }: { children: ReactElement }) => {
  return (
    <form className="w-full max-w-sm">
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
            htmlFor="inline-full-name"
          >
            이메일
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            id="inline-full-name"
            type="email"
            placeholder="email@example.com"
          />
        </div>
      </div>
      <div className="mb-6 md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
            htmlFor="inline-password"
          >
            비밀번호
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-purple-500 focus:bg-white focus:outline-none"
            id="inline-password"
            type="password"
            placeholder="******************"
          />
        </div>
      </div>

      {children}
    </form>
  );
};

export default LoginForm;
