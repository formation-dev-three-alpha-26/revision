const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Join Us</h1>
        <p className="auth-subtitle">Create your account to get started</p>

        {/* {<div className="error-message"> </div>} */} 
        {/* staamlha pour lerror message */}
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input id="name" type="text" placeholder="username" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-submit">
            Create Account
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
