import { Github } from "lucide-react";

const Login = () => {
  const handleGithubLogin = () => {
    const githubAuthUrl =
      "https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=user";
    window.location.href = githubAuthUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Login</h2>
      <button
        onClick={handleGithubLogin}
        className="bg-black text-white px-4 py-2 mt-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
      ></button>
      <Github />
    </div>
  );
};

export default Login;
