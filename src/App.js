import './App.css';
import Users from './Context/Users/UsersList';
import Product from './Context/Product/Product';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import { UsersProvider } from './Context/Users/Users';
import CreateUser from './Context/Users/CreateUser';
import Footer from './Components/Footer';



function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />
          <UsersProvider>
            <Switch>
              <Route path='/dashboard' exact component={Dashboard}/>
              <Route path='/Formik-users' exact component={Users}/>
              <Route path='/Formik-CreateUser' exact component={CreateUser}/>
              <Route path='/Formik-editUser/:uid' exact component={CreateUser}/>
              <Route path='/products' exact component={Product}/>
              <Route path='/' exact >
                <Redirect to = '/dashboard'/>
              </Route>
            </Switch>
          </UsersProvider>
          <div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
