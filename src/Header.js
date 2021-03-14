import logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header(){
 return (
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Link to={"/"}>최상단</Link>
    <Link to={"/buttons"}>Buttons</Link>
   </header>
 )
}
export default Header;
