import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const token = Math.random().toString(36);
      localStorage.setItem("user", JSON.stringify({ email: form.email, token }));
      toast.success("Login successful");
      navigate("/otp-verification");
    }
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-[#6B599C] text-center">
        Log in into your account
      </h2>

      <div>
        <input
          type="email"
          placeholder="Email"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={form.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
        )}
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          value={form.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
        />
        <span
          className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 text-left">
            {errors.password}
          </p>
        )}
      </div>

      <p className="text-sm text-[#ED741B] text-center cursor-pointer">
        Forgot Password?
      </p>

      <button
        type="submit"
        className="w-full bg-[#6B4ACF] text-white py-2 rounded-lg shadow-md cursor-pointer"
      >
        Log In
      </button>

      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <span className="text-[#ED741B] cursor-pointer">Create Account</span>
      </p>
    </form>
  );
};

export default LoginForm;