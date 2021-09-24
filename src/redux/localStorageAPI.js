export const getToken = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).token
    : null;
};
