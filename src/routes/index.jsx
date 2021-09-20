import { Switch, Route, Redirect } from "react-router"
import {Dashboard , Home, Login, NewMessage} from '../pages';
import {Header} from '../components';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/'>
          <>
            <Header />
            <div className="container pageWrapper">
              <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/messages' component={Home}/>
                <Route path='/message/add' component={NewMessage}/>        
                <Route path='/' exact>
                  <Redirect to="/messages" />
                </Route>
              </Switch>
            </div>
          </>         
        </Route>
      </Switch>
    </>
  )
}

export {
  Routes
}