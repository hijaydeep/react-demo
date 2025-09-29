import LeftPanel from "../components/LeftPanel";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-6xl flex rounded-3xl shadow-lg overflow-hidden">
        <div className="w-1/2">
          <LeftPanel />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center px-12">
          <img src="/img/logo.png" alt="logo" className="h-14 mb-6" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
