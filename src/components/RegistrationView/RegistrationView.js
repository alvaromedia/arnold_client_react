const RegistrationView = () => {
  return (
    <div>
      <form action="POST">
        <label htmlFor="username">
          <input type="text" id="username" />
        </label>

        <label htmlFor="password">
          <input type="password" id="password" />
        </label>

        <label htmlFor="email">
          <input type="text" id="email" />
        </label>
      </form>
    </div>
  );
};

export default RegistrationView;
