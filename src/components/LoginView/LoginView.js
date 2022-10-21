import "./LoginView.css";
import { useState } from "react";

const LoginView = () => {
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
  };

  return (
    <div>
      <form>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            type="password"
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
