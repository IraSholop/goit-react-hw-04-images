import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export function Modal({ onClose, url }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>{url && <img src={url} alt="" />}</div>
    </div>
  );
}

Modal.protoType = {
  url: PropTypes.string,
  onClose: PropTypes.func,
};
