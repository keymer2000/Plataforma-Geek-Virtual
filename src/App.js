import HeaderNav from './components/HeaderNav';
import DashboardNav from './components/DashboardNav'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div>
      <HeaderNav />
      <DashboardNav />

     {/* <BrowserRouter> 
        <Link to= "{'#'}"></Link>
        <Switch>
          <Route path="/url" exact component={"#"}>
          <Route path="/url" exact render={"#"}></Route>
          </Route>
        </Switch>
      </BrowserRouter>  */}
    </div>
  );
}

export default App;
