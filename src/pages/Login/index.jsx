import { useHistory } from 'react-router';
import './index.css';

const Login = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/');
  }

  return (
    <>
      <div className="paper container loginContainer">
        <form className="loginForm" method='POST' action="#" onSubmit={handleSubmit}>
          <div className='inputWrapper'>
            <label for='login_inp'>Login</label>
            <input type="text" name='login' id='login_inp'/>
          </div>
          <div className='inputWrapper'>
            <label for='password_inp'>Password</label>
            <input type="password" name='password' id='password_inp'/>
          </div>
          <button type="submit"> Login </button>
        </form>
      </div>
    </>
  );
}
export default Login;