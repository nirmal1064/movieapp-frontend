const initialState = {
  user: {
    id: null,
    auth: false,
    token: null,
    username: null,
    isLoading: false
  }
};

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
