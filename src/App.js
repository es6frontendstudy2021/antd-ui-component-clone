import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./IndexPage";
import ButtonPage from "./ButtonPage";
import Header from "./Header";


function App() {
  return (
    <Router>
     <Header/>
     <Switch>
      <Route exact path={"/"} component={IndexPage}/>
      <Route exact path={"/buttons"} component={ButtonPage}/>
     </Switch>
    </Router>
  );
}

export default App;
