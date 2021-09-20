import { Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  const history = useHistory();
  const navigate = (route) => {
    history.push(route);
  }
  const routes = [
    { path: '/messages', label: 'Mensagens'},
    { path: '/dashboard', label: 'Dashboard'},
  ]

  return <>
    <div className='header'>
      <Box className="container">
        <Link to='/'>
          <h1>ZAP REACT</h1>
        </Link>
        <nav>
          <ul>
            {
              routes.map(
                (route, idx) => (
                  <li key={idx} onClick={()=>navigate(route.path)}>
                    {route.label}
                  </li>
                )
              )
            }
          </ul>
        </nav>
      </Box>
    </div>
  </>  
}

export default Header;