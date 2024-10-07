const LoginCard = () => {
  return (
    <div className="xl:min-h-[90vh]">
      <div className="flex flex-col p-16 gap-5 font-normal bg-black bg-opacity-80 w-[500px] rounded">
        <h1 className="text-3xl font-bold ">Sign In</h1>
        <input
          className="flex-grow border border-gray-500 bg-[rgba(0,0,0,0.3)] p-3 rounded text-white focus:outline focus:outline-1 outline-white"
          type="email"
          placeholder="Email or mobile number"
        />
        <input
          className="flex-grow border border-gray-500 bg-[rgba(0,0,0,0.3)] p-3 rounded text-white focus:outline focus:outline-1 outline-white"
          type="password"
          placeholder="Password"
        />
        <button className="items-center bg-[rgb(229,9,20)] w-full text-white rounded py-2">
          Sign In
        </button>
        <span className="text-sm text-gray-300 w-full text-center">OR</span>
        <button className="items-center bg-white bg-opacity-25 w-full text-white rounded py-2 hover:bg-opacity-20 transition-all duration-200">
          Use a sign-in code
        </button>
        <span className="text-white w-full text-center hover:underline hover:opacity-75 cursor-pointer">
          Forgot password?
        </span>
        <div>
          <span className="opacity-75">New to Netflix? </span>
          <span className="hover:underline cursor-pointer">Sign up now.</span>
        </div>
        <div className="text-sm">
          <span className="opacity-50">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </span>
          <span className="text-blue-500 cursor-pointer hover:text-blue-600">
            Learn more.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
