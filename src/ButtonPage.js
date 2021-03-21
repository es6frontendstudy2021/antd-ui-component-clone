import { Button } from "antd";
import CustomButton from "./component/customButton";


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
    <br />
    <hr />
    <CustomButton type="primary">주요 버튼</CustomButton><span>&nbsp;</span>
    <CustomButton>기본 버튼</CustomButton><span>&nbsp;</span>
    <CustomButton type="dashed">대시 버튼</CustomButton><span>&nbsp;</span>
    <CustomButton type="text">Text Button</CustomButton><span>&nbsp;</span>
    <CustomButton type="link">Link Button</CustomButton><span>&nbsp;</span>
    <CustomButton type="primary" network={true}>Network Action Button</CustomButton><span>&nbsp;</span>
   </div>
 )
}

export default Buttons;
