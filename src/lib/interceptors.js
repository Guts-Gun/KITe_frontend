
import axios from "axios";
import apiConfig from "../lib/apiConfig";

//요청시 AccessToken 계속 보내주기
axios.interceptors.request.use(function (config) {

  let token = null;

  const accesstoken = localStorage.getItem("accesstoken");

  if(accesstoken){
    if (config.url != apiConfig.refreshToken) {
      token = accesstoken;

    }
  }
  if(token !== null){
    config.headers.Authorization = `Bearer ${accesstoken}`;

  }
  
  return config;

});

// axios로부터 response를 받아 처리하기 전에 intercept
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;

      if ( err.response.status === 401 &&err.config &&!err.config.__isRetryRequest ) {
        originalReq._retry = true;
      
        const accessToken = localStorage.getItem("accesstoken");
        const refreshToken = localStorage.getItem("refreshtoken");
        
        
        axios.post(apiConfig.authRefreshToken,{ refresh_token: refreshToken, access_token: accessToken })
        .then((res) => {
          localStorage.setItem("accesstoken", res.data.token.access_token);
          localStorage.setItem("refreshtoken", res.data.token.refresh_token);

          return axios(originalReq);
        
        }).catch(() => {
          localStorage.clear();
          window.location.href = "/"; 
          return false;
        });
      }
      // 오류 발생 시 오류 내용 출력 후 요청 거절
      return Promise.reject(err);
    });
  }
);
