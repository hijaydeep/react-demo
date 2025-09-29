import LeftPanel from "../components/LeftPanel";
import OTPForm from "./OTPForm";

const Otp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-6xl flex rounded-3xl shadow-lg overflow-hidden">
        <div className="w-1/2 bg-[#6B4ACF]">
          <LeftPanel />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center px-12">
          <img src="/img/otp.png" alt="logo" className="h-14 mb-6" />
          <OTPForm />
        </div>
      </div>
    </div>
  );
};

export default Otp;
