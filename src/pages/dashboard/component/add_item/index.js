import Modal from "../../../../components/core/modal";
import { FormStyle } from "./index.style";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as actions from "../../state/action";
import { useDispatch } from "react-redux";
const AddItem = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const bodyRef = useRef();
  const userIdRef = useRef();
  const formSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value,
      })
      .then((res) => {
        dispatch(actions.add_data_success(res.data));
        console.log(res.data);
        toast.success("Item has been created!");
      });
  };
  return (
    <Modal display={props.display}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <FormStyle onSubmit={(e) => formSubmit(e)}>
        <input type="text" ref={titleRef} placeholder="Title" />
        <input type="text" ref={bodyRef} placeholder="body" />
        <input type="text" ref={userIdRef} placeholder="UserId" />
        <button type="submit">Submit</button>
      </FormStyle>
    </Modal>
  );
};

export default AddItem;
