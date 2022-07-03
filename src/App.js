import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import Header from "./component/Header";
import GoalList from "./routers/GoalList";
import GoalCreate from "./routers/Goal-create";
import SideBar from "./component/SideBar";
import GoalEdit from "./routers/GoalEdit";

import "./style/App.css";

function App() {
    return (
        <Router>
            <Header/>
            <main className={"mainWrapper"}>
                <SideBar/>
                <Switch>
                    <Route path="/goals/list" component={GoalList} />
                    <Route path="/goals/create" component={GoalCreate} />
                    <Route path="/goals/edit/:id" component={GoalEdit} />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
