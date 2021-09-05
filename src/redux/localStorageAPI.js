const initialState = {};

export const loadFromStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : initialState;
};

export const saveToStorage = (state) => {
  try {
    localStorage.setItem("user", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
};
