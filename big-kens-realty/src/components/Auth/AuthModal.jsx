import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin) {
      if (!formData.firstName) {
        newErrors.firstName = "First name is required";
      }
      if (!formData.lastName) {
        newErrors.lastName = "Last name is required";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      if (isLogin) {
        console.log("Login attempt:", { email: formData.email, password: formData.password });
        // Simulate login success
        alert("Login successful!");
        onClose();
      } else {
        console.log("Signup attempt:", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password
        });
        // Simulate signup success
        alert("Account created successfully!");
        onClose();
      }
    }
  };

  const switchMode = () => {
    setIsLogin((prev) => !prev);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: ""
    });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-[#1b1e49] p-8 rounded-xl shadow-2xl max-w-md w-full mx-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? "Sign In" : "Sign Up"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-[#0c0e28] text-white rounded-md border ${
                      errors.firstName ? "border-red-500" : "border-gray-600"
                    } focus:outline-none focus:ring-2 focus:ring-[#b5ffcb]`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 bg-[#0c0e28] text-white rounded-md border ${
                      errors.lastName ? "border-red-500" : "border-gray-600"
                    } focus:outline-none focus:ring-2 focus:ring-[#b5ffcb]`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-[#0c0e28] text-white rounded-md border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-[#b5ffcb]`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 py-2 bg-[#0c0e28] text-white rounded-md border ${
                  errors.password ? "border-red-500" : "border-gray-600"
                } focus:outline-none focus:ring-2 focus:ring-[#b5ffcb]`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {!isLogin && (
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 bg-[#0c0e28] text-white rounded-md border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-[#b5ffcb]`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#b5ffcb] text-black py-3 rounded-md font-bold hover:bg-[#9ae6af] transition-colors duration-300 mt-4"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={switchMode}
                className="text-[#b5ffcb] hover:underline font-medium"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;