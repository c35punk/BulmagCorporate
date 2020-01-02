import { post } from "../data/crud";
import { dbConstants } from "../constants/constants";

const authenticationService = {
  loginUser: useData => post(dbConstants.loginUrl, useData),
  logoutUser: () => post(dbConstants.logoutUrl),
  registerUser: userData => post(dbConstants.registerUrl, userData)
};

export default authenticationService;
