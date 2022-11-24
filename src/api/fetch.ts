import axios from 'axios';

const getAllBreed = async () => {
  try {
    const { data: { message }} = await axios({
      method: 'get',
      url: 'https://dog.ceo/api/breeds/list/all'
    })
    return message;
  } catch (e) {
    return e;
  }
}

const getSubBreed = async (breed: String) => {
  console.log(2);
  
  try {
    const { data: { message }} = await axios({
      method: 'get',
      url: `https://dog.ceo/api/breed/${breed}/list`,
    })
    return message;
  } catch (e) {
    return e;
  }
}

const getImages = async ({breed, subBreed, count} :any) => {
  console.log(1);
  
  try {
    console.log(breed, subBreed);
    
    const { data: { message }} = await axios({
      method: 'get',
      url: `https://dog.ceo/api/breed/${breed}/${subBreed ? subBreed + '/': ''}images/random/${count ? count: ''}`,
    })
    return message;
  } catch (e) {
    return e;
  }
}

export {
  getAllBreed,
  getSubBreed,
  getImages
};
