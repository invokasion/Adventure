import axiosInstance from "./axiosConfig";

const userloginAPI = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post(`${process.env.REACT_APP_API}/user/login`, {
      email,
      password,
    });

    localStorage.setItem('token', JSON.stringify(response.data.token));
    return response.data; // Return the response data for further handling in the component
  } catch (error) {
    // Handle error
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Connection error");
  }
};

export default userloginAPI;
