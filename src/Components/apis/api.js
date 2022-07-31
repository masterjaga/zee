

import axios from "axios";



const logOUT = () => {
    localStorage.removeItem("$zen_auth_token");
    localStorage.removeItem("activeMenu");
    return (window.location.href = "/login");
  };

  
let api = null;

function getInitializedApi() {   //creating instance 
  if (api) return api; 
  return (api = axios.create({
    baseURL: "http://localhost:3080",
    responseType: "json",
    timeout: 15000,
  }));
}

export const axiosGet = (url, token, params = "") => {
  return getInitializedApi()
    .get(url, {
      headers: {
        authorization: `bearer ${token}`,
      },
      params: params,
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        logOUT();
      }
    });
};


export const axiosPost = (url, data, token) => {
  return getInitializedApi()
    .post(url, data, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
    .catch((err) => {
    /*   if (err.response.status === 401 || err.response.status === 403) {
        logOUT();
      } */
    });
};

export const axiosPut = (url, data, token) => {
  return getInitializedApi()
    .put(url, data, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        logOUT();
      }
    });
};

export const axiosDelete = (url, data, token) => {
  return getInitializedApi()
    .post(url, data, {
      headers: {
        authorization: `bearer ${token}`,
      },
    })
    .catch((err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        logOUT();
      }
    });
};
