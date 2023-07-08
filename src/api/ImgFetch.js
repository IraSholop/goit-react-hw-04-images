const KEY = '37974323-76ad61b78f2a64298e7c10a6a';

export function ImgFetch (value, page) {
  return  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(
        new Error('По вашому запиту нічого не знайдено')
      );
    })
}

