import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, item }) {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.modalOverlayStyle}
      className={css.content}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <p className={css.author}>Author: {item.user.name}</p>
      <img
        className={css.image}
        src={item.urls.regular}
        alt={item.alt_description}
      />
    </Modal>
  );
}
