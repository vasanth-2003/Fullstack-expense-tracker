import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/Usercontext";


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const {updateUser} = useContext(UserContext) 

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axiosInstance.post(API_PATHS.AUTH.SIGNUP, {
        name,
        email,
        password,
      });
      const user = res.data.newUser
      console.log("new",newUser)
      if (res){
        localStorage.setItem("token",res.data.token)
        updateUser(user)
        alert("Signup Successful 🎉 Please Login!");
        navigate("/dashboard");
      }
      
    } catch (err) {
      if (err.response?.status === 400) {
        setError("User already exists!");
      } else {
        setError("Signup failed, try again!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Create Account 
        </h2>

        <form className="space-y-4" onSubmit={handleSignup}>
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>

          {error && (
          <p className="text-start text-sm text-red-500 font-medium">
            {error}
          </p>
        )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
