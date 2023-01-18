const service = {
    user : "/user", //localhost:8001
    result : "/result", //localhost:8002
    requestMsg : "/requestMsg", //localhost:8011
    requestEmail : "/requestEmail", //localhost:8012
};

const version = '/v1';


const apiConfig = {
    //select
    groupSelect:service.user+"/group",
    //create
    groupCreate:service.user+"/group/create",
    groupCopy:service.user+"/group/copy",
    //update
    groupUpdate:service.user+"/group",
    //delete
    groupDeleteSingle:service.user+"/group", //+groupId,
    groupDeleteMulti:service.user+"/group",

    resultUsage:service.result + "/usage",
    resultSending:service.result + "/sending",
    resultSendingResultList:service.result + "/sending/result",
    resultSendingResult:service.result + "/sending/result", //+sendingId





}

export default apiConfig;


