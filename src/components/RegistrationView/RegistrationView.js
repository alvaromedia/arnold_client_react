import { useState } from "react";

const RegistrationView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);
  const [registration, setRegistration] = useState(null);

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

    if (data.error) {
      setError(data.error);
    }

    if (data.name) {
      setRegistration(true);
    }

    setUsername("");
    setPassword("");
    setEmail("");
  };

  if (error) {
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
    return (
      <div>
        <h1 style={{ color: "red" }}>INVALID REGISTRATION DATA</h1>
        <h3>Username must be at least 3 characters long</h3>
        <h3>Password must be at least 6 characters long</h3>
        <p>Please reload the page</p>
      </div>
    );
  }

  if (registration) {
    return (
      <div>
        <h1>Registration processed successfully</h1>
        <p>Please proceed to login</p>
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

      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button onClick={handleRegistration}>Register</button>
    </form>
  );
};

export default RegistrationView;
