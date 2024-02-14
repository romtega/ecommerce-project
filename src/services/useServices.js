import axios from "axios";

const BASE_URL = "https://ecommerce-json-jwt.onrender.com";

const registerUserServices = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { registerUserServices };
