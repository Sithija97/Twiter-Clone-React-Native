import axios from "axios";
import localStorage from "react-native-expo-localstorage";

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

    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// Login user
const loginUser = async (userData: LoginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, userData);

    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// Logout user
const logoutUser = () => {
  localStorage.removeItem("user");
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
