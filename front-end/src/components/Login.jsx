const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Sign in to your account</p>

        {/* staamlha pour lerror message */}

        {/* {<div className="error-message"></div>} */} 
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="auth-submit">
            Sign in
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <a href="/register">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
