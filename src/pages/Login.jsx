const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> peer to peer chat </span>
        <span className="logo"> Register </span>
        <form action="">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
