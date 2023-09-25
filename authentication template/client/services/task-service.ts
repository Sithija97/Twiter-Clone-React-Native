import axios from "axios";

const BASE_URL = "http://192.168.8.100:8000/api/goals"; // Replace with your backend API URL

// Create new goal
const createTask = async (goalData: {}, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(BASE_URL, goalData, config);
  return response.data;
};

// Get user goals
const getTasks = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(BASE_URL, config);

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
};

export default taskService;
