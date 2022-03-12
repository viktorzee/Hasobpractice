import ReactModal from "react-modal";
import { ModalProps } from "../types/ModalProps";

const MediumModal: React.FC<ModalProps> = ({ modalIsOpen, setModalOpen, children }) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalOpen(false)}
      className="p-4 w-screen max-w-max mx-auto max-h-full overflow-y-auto bg-white rounded shadow-md"
      overlayClassName="h-full w-screen  p-4 fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
      bodyOpenClassName="overflow-hidden"
    >
      {children}
    </ReactModal>
  );
};

export default MediumModal;
