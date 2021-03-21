import { Input } from "antd";
import CustomInput from "./component/customInput";



function InputPage(){
 return (
   <div className="App">
    <h1>기본적인 Inputs</h1>
    <a href="https://ant.design/components/input/" target={"_blank"}>antd 새창 이동</a>
    NumberTypeInput : <input type={"number"} />
    ==> 넘버타입의 단점 얘기해보기
    <hr/>
    CustomInput : <CustomInput max={9999} min={0.001} /><br/>
    CustomInput : <CustomInput min={0.001} />
   </div>
 )
}

export default InputPage;
