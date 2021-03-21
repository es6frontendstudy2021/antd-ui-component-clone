import { useState } from "react";
import CustomModal from "./component/customModal";
function ModalPage(){
 const [isModalVisible, setIsModalVisible] = useState(false);

 const showModal = () => {
  setIsModalVisible(true);
 };

 const handleOk = () => {
  setIsModalVisible(false);
 };

 const handleCancel = () => {
  setIsModalVisible(false);
 };

 return (
   <div className="App">
    <CustomModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
     <p>Some contents...</p>
     <p>Some contents...</p>
     <p>Some contents...</p>
    </CustomModal>
    <button onClick={showModal}>모달열려라</button>
   </div>
 )
}

export default ModalPage;
