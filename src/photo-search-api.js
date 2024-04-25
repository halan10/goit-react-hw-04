import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search/';
const CLIENT_ID = 'Q2hM1G5KyKyybz-9LTYPRyf9PfuatQNAioXNUYORBjE';

export const fetchPhotos = async (searchQuery, currentPage) => {
  const responce = await axios.get('/photos', {
    params: {
      client_id: CLIENT_ID,
      query: searchQuery,
      per_page: 20,
      page: currentPage,
    },
  });
  return responce.data.results;
};
