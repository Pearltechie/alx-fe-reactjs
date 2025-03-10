function Login() {
    const login = () => {
      localStorage.setItem('auth', 'true');
      window.location.href = '/profile';
    };
  
    return <button onClick={login}>Login</button>;
  }
  
  export default Login;
  