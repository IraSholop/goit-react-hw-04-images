import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export function ImageGallery({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [urlModal, setUrlModal] = useState('');

  const toggleModal = e => {
    setShowModal(!showModal);
    setUrlModal(e);
  };

  return (
    <>
      <ul className={css.imagegallery}>
        {data.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              url={image.webformatURL}
              urlModal={image.largeImageURL}
              onOpen={toggleModal}
            />
          );
        })}
      </ul>
      {showModal && <Modal onClose={toggleModal} url={urlModal} />}
    </>
  );
}

ImageGallery.protoType = {
  data: PropTypes.arrayOf(PropTypes.object),
};
