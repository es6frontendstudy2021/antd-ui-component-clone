import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header(){
 return (
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" style={{maxWidth:"200px"}} />
    <Link to={"/"}>최상단</Link>
    <Link to={"/buttons"}>Buttons</Link>
    <Link to={"/inputs"}>inputs</Link>
    <Link to={"/modals"}>modals</Link>
   </header>
 )
}
export default Header;
