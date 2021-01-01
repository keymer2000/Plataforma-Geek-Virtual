
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BootcampMain from './components/ContenidoBootcamp/BootcampMain';
import Posts from './components/GeekMain/Posts';
import Main from "./components/Main";

function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Switch>

        <Route path="/Posts" exact 
          render={(props)=><Main {...props}
          contentComponent={Posts} />}>
          </Route>

          <Route path="/BootcampMain" exact 
          render={(props)=><Main {...props} 
          contentComponent={BootcampMain} />}>
          </Route>

        

          <Route path="/" exact render={(props)=><Redirect {...props} to="/Posts"></Redirect>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
