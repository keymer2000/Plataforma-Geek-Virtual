import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


function Route() {
    return(
        <div>
          <BrowserRouter>
            <Switch>
              
              <Route path="/Evidence" exact render={(props)=><Main {...props}contentComponent={Evidence} />}></Route>  

              <Route path="/" exact render={(props)=><Redirect {...props} to="/Posts"></Redirect>}></Route>
            </Switch>
   </BrowserRouter>
        </div>
    )
    
}

export default Route