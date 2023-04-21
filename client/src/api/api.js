import axios from "axios";

export const registerUser = async (data) => {
  try {
    const response = await axios.post("/register", data);
    return response.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export const loginUser = async (data) => {
    try {
      const response = await axios.post("/login", data);
      return response.data;
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };
  