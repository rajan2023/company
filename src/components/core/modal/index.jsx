import { ModalDesign } from "./index.style";
import PropTypes from "prop-types";
const Modal = (props) => {
  return (
    <ModalDesign ref={props.modalRef} {...props}>
      {props.children}
    </ModalDesign>
  );
};
export default Modal;

Modal.propTypes = {
  modalRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  children: PropTypes.node.isRequired,
  display: PropTypes.bool.isRequired,
};
