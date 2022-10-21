import { useState } from "react";

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
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
