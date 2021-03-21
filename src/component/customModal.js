
// https://goddino.tistory.com/74
const CustomModal = ({title, visible, onOk, onCancel, ...props}) => {
 return (
   <div className={`modal ${visible ? '' : 'hidden'}`}>
    <div className="bg"></div>
    <div className="custom-modal">
     <div className="title">${title}</div>
     {props.children}
     <button className="closeBtn" onClick={onCancel}>✖</button>
    </div>
   </div>
 )
}

export default CustomModal
