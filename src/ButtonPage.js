import {Button} from "antd";


function Buttons(){
 return (
   <div className="App">
    <h1>기본적인 Buttons</h1>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
   </div>
 )
}

export default Buttons;
