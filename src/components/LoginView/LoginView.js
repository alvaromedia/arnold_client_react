import "./LoginView.css";
import { useState } from "react";

const LoginView = ({ setIsLogged }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://movierestapi-production.up.railway.app/api/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: username,
          password: password,
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    setIsLogged(data);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="username">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
};
export default LoginView;
