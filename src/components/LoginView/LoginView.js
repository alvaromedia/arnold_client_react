import { useState, useContext } from "react";
import AuthContext from "../AuthContext";

const LoginView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State to check if the login credentials are invalid
  const [error, setError] = useState(null);

  // context
  const { setCurrentUser } = useContext(AuthContext);

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

    if (data.error) {
      setUsername("");
      setPassword("");
      setError(data.error);
    }

    if (data.user) {
      localStorage.setItem("userID", data.user._id);
      localStorage.setItem("token", data.token);
      setCurrentUser(data.user.name);
    }
  };

  if (error) {
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);

    return (
      <div>
        <h1 style={{ color: "red" }}>INVALID CREDENTIALS</h1>
        <p>Please reload the page</p>
      </div>
    );
  }

  return (
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
  );
};
export default LoginView;
