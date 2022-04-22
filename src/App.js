import { Route, Switch, Redirect} from 'react-router-dom';
import MainProfessor from './pages/Professor/MainProfessor';
import "./App.css";
import MainAddReview from './pages/addReview/MainAddReview';
import MainPage from './pages/MainPage/MainPage';

function App(){
    return(
        <Switch>
            <Route path='/' exact>
                <Redirect to= '/mainPage'/>
            </Route>
            <Route path ='/professor' exact>
                <MainProfessor/>
            </Route>
            <Route path='/professor/add-review'>
                <MainAddReview/>
            </Route>
            <Route path='/mainPage'>
                <MainPage/>
            </Route>
        </Switch>
    );
}

export default App;