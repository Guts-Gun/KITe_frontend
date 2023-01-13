const service = {
    user : "/user", //localhost:8001
    result : "/result", //localhost:8002
    requestMsg : "/requestMsg", //localhost:8011
    requestEmail : "/requestEmail", //localhost:8012
};

const version = '/v1';


const apiConfig = {
    group:service.user+version+"/"+"group"
}
export default apiConfig;


