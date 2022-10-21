import { useState } from "react";

const RegistrationView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://movierestapi-production.up.railway.app/api/users",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: username,
          password: password,
          email: email,
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    setUsername("");
    setPassword("");
    setEmail("");
  };

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

      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button onClick={handleRegistration}>register</button>
    </form>
  );
};

export default RegistrationView;
