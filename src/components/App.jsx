import { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImgFetch } from 'api/ImgFetch';

export function App() {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setLoader(true);

    ImgFetch(value, page)
      .then(img => {
        setImage(prev => [...prev, ...img.hits]);
        setTotal(img.total);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [value, page]);

  const formSubmitHandler = imgName => {
    if (imgName !== value) {
      setPage(1);
      setImage([]);
    }
    setValue(imgName);
  };

  const togglePage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSubmit={formSubmitHandler} />
      {error && <div>{error.message}</div>}
      {loader && <Loader />}
      <ImageGallery data={image} />
      {total !== image.length && <Button click={togglePage} />}
    </>
  );
}
