import "./RegistrationView.css";
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
  };

  return (
    <div>
      <form>
        <label>
          Username
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
          Password
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Email
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button onSubmit={handleRegistration}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationView;
