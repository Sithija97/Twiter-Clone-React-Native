import axios from "axios";

const BASE_URL = "http://192.168.8.100:8000/api"; // Replace with your backend API URL

export interface registerData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Register a new user
const registerUser = async (userData: registerData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

const apiService = {
  registerUser,
};

export default apiService;
