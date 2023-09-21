import axios from "axios";

const BASE_URL = "http://192.168.8.100:8000/api"; // Replace with your backend API URL

const apiService = axios.create({
  baseURL: BASE_URL,
  // Adjust the timeout as needed
});

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
export const registerUser = async (userData: registerData) => {
  try {
    //  axios.post("http://192.168.8.102:8000/postAttendence", { data });
    const response = await apiService.post("/users", userData);
    return response.data; // Assuming your API returns a response with user data upon successful registration
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

// Login an existing user
export const loginUser = async (credentials: LoginData) => {
  try {
    const response = await apiService.post("/users/login", credentials);
    return response.data; // Assuming your API returns a response with user data upon successful login
  } catch (error) {
    console.log(`error : ${error}`);
    throw error;
  }
};

export default apiService;
