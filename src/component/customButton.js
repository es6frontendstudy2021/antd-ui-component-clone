import { useRef, useState, useCallback } from 'react'

const CustomButton = (props) => {

 const buttonRef = useRef();
 const [disabled, setDisabled] = useState(false);

 const handleOnClick = useCallback(() => {
  if(props.network){
   // eslint-disable-next-line no-unused-expressions
   buttonRef.current.disabled = true
   setDisabled(true)
  }

  setTimeout(()=>{
   buttonRef.current.disabled = false
   setDisabled(false);
  }, 3000);

 },[disabled]);

 return (
   <button className={`custom-button ${props.type}`} onClick={handleOnClick} ref={buttonRef}>
    <div className="lds-roller">
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
     <div></div>
    </div>
    {!disabled && props.children}
   </button>
 )
}

export default CustomButton
