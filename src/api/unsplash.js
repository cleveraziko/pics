import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID HPFwWofBipHPKeYHRE0W1F7SFzwSiphZtK39lDQG2Rg',
  },
});
