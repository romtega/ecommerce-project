/* eslint-disable no-useless-catch */
import axios from "axios";

const BASE_URL = "https://ecommerce-json-jwt.onrender.com";

const registerUserServices = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

const loginUserServices = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export { registerUserServices, loginUserServices };
