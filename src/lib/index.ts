import {authorizeURL, getCompanys, getCredentialType, getToken} from "./oauth";

const govbrOauth2 = {
  authorize: authorizeURL,
  getToken: getToken,
  getCredentialType: getCredentialType,
  getCompanys: getCompanys
};

export default govbrOauth2;
