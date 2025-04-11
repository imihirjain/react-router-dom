const API = import.meta.env.VITE_API;
export const getAPIData = async () => {
  try {
    const response = await fetch(API);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
