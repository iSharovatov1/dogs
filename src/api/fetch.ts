import axios from 'axios';

import { IGetImagesParams } from '../interfaces';

const { REACT_APP_API_URL } = process.env;

const getBreeds = async () => {
  try {
    const { data: { message } } = await axios({
      method: 'get',
      url: `${REACT_APP_API_URL}breeds/list/all`,
    });
    return message;
  } catch (e) {
    return e;
  }
};

const getImages = async ({ breed, subBreed, count }: IGetImagesParams) => {
  const query = `${breed}/${subBreed ? `${subBreed}/` : ''}images/random/${count || ''}`;
  try {
    const { data: { message } } = await axios({
      method: 'get',
      url: `${REACT_APP_API_URL}breed/${query}`,
    });
    return message;
  } catch (e) {
    return e;
  }
};

export {
  getBreeds,
  getImages,
};
