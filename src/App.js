import { Route, Switch, Redirect} from 'react-router-dom';
import MainProfessor from './pages/Professor/MainProfessor';
import "./App.css";

function App(){
    return(
        <Switch>
            <Route path='/' exact>
                <Redirect to= '/professor'/>
            </Route>
            <Route path ='/professor' exact>
                <MainProfessor/>
            </Route>
            <Route path='/professor/add-review'>

            </Route>
            <Route path='/mainPage'>

            </Route>
        </Switch>
    );
}

export default App;