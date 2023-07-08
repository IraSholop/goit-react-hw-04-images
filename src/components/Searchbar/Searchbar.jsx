import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState('');

  const handleChange = e => {
    setImgName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imgName.trim() === '') {
      alert('введіть щось');
      return;
    }
    onSubmit(imgName);
    setImgName('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <i className="gg-search"></i>
          <span className={css.buttonlabel}>Search </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={imgName}
        />
      </form>
    </header>
  );
}

Searchbar.protoType = {
  onSubmit: PropTypes.func,
};
