import {KeyLimit} from "../customhook/KeyLimitCustomHook";

/**
 *
 * @param cipher : 자릿수
 * @param max : 최대수
 * @param min : 최소 수
 * @returns {JSX.Element}
 * @constructor
 */
const CustomInput = ({cipher = 3, max=9999999, min}) => {
 const [keyupLimitNumber, keydownLimitNumber] = KeyLimit(cipher, max, min);
 return (
   <input
     onKeyUp={keyupLimitNumber}
     onKeyDown={keydownLimitNumber}
   />
 )

}


export default CustomInput;
