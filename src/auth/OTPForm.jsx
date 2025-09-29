import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const OTPForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) {
      setEmail(user.email);
    } else {
      toast.error("No user found. Redirecting to login...");
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token || !user.email) {
      toast.error("Invalid session. Please log in again.");
      navigate("/dashboard");
      return;
    }

    if (enteredOtp === "123456") {
      localStorage.setItem("isOtpVerified", "true");
      toast.success("OTP verified successfully!");
      navigate("/dashboard");
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-[#6B599C] text-center">
        OTP Verification
      </h2>

      <p className="text-center text-gray-600">
        Enter OTP sent to <span className="font-semibold">{email}</span>
      </p>

      <div className="flex justify-center space-x-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none border-gray-300"
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-[#6B4ACF] text-white py-2 rounded-lg shadow-md cursor-pointer"
      >
        Verify OTP
      </button>
    </form>
  );
};

export default OTPForm;