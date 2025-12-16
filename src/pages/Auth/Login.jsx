import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { Usercontext } from "../../context/Usercontext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const {updateUser} = useContext(Usercontext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axiosInstance.post(API_PATHS.AUTH.LOGIN ,{
        email,
        password,
      });
      console.log(res)
      const user = res.data.existuser
   
      if (res){
        localStorage.setItem("token", res.data.token);
        // updateUser(user)
        alert("Login Success!");
        navigate("/dashboard")
      }
      
    } catch (err) {
      if (err.response && err.response.data.message){
        setError(err.response.data.message);
      }else{
        setError("Invalid Credentials. Try Again!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Welcome Back 👋
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
          <p className="text-sm text-red-500 text-start font-medium">
            {error}
          </p>
        )}
          <button
            className="w-full py-2 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm font-medium">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:underline font-semibold"
          >
            Create Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
