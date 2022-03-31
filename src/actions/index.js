export const SET_USER_EMAIL = 'SET_USER_EMAIL';
const setUserEmail = (email) => (
  {
    type: SET_USER_EMAIL, email,
  });

export default setUserEmail;
