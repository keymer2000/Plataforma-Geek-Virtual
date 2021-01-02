import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BootcampMain from './components/ContenidoBootcamp/BootcampMain';
import Posts from './components/GeekMain/Posts';
import Main from "./components/Main";
import ForumMain from './components/SocialForum/ForumMain';
import TaskMain from './components/Task/TaskMain';
import PortfolioMain from './components/PortfolioEvidence/PortfolioMain';
import DocMain from './components/RegulatoryDoc/DocMain';
import ParticipantsMain from './components/Participants/ParticipantsMain';
import InstructorsMain from './components/Instructors/InstructorsMain';


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

          <Route path="/ForumMain" exact 
          render={(props)=><Main {...props} 
          contentComponent={ForumMain} />}>
          </Route>

          <Route path="/TaskMain" exact 
          render={(props)=><Main {...props} 
          contentComponent={TaskMain} />}>
          </Route>

          <Route path="/PortfolioMain" exact 
          render={(props)=><Main {...props} 
          contentComponent={PortfolioMain} />}>
          </Route>

          <Route path="/DocMain" exact
          render={(props)=><Main {...props}
          contentComponent={DocMain} />}>
          </Route>

          <Route path="/ParticipantsMain" exact
          render={(props)=><Main {...props}
          contentComponent={ParticipantsMain} />}>
          </Route>

          <Route path="/InstructorsMain" exact
          render={(props)=><Main {...props}
          contentComponent={InstructorsMain} />}>
          </Route>

          <Route path="/" exact render={(props)=><Redirect {...props} to="/Posts"></Redirect>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
