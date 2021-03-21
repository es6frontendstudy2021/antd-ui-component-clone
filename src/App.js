import './App.css';
import './Button.css';
import './Modal.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./IndexPage";
import ButtonPage from "./ButtonPage";
import Header from "./Header";
import InputPage from "./InputPage";
import ModalPage from "./ModalPage";


function App() {
  return (
    <Router>
     <Header/>
     <Switch>
      <Route exact path={"/"} component={IndexPage}/>
      <Route exact path={"/buttons"} component={ButtonPage}/>
      <Route exact path={"/inputs"} component={InputPage}/>
      <Route exact path={"/modals"} component={ModalPage}/>
     </Switch>
    </Router>
  );
}

export default App;
