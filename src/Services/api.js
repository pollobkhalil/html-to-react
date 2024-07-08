import axios from 'axios';

const BASE_URL = 'https://dev.triumphdigital.co.th/btt/wp-json/custom/v1';

export const fetchTours = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tours`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTourDetails = async (tourId) => {
  try {
    const response = await axios.get(`${BASE_URL}/tours/${tourId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
