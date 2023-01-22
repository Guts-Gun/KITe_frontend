const service = {
    user : "/user", //localhost:8001
    result : "/result", //localhost:8002
    requestMsg : "/request", //localhost:8011
};

const version = '/v1';


const apiConfig = {
    
    // GROUP
    groupSelect :           service.user + "/group",                         // SELECT
    groupCreate :           service.user + "/group/create",                  // CREATE
    groupCopy :             service.user + "/group/copy",                    // COPY
    groupUpdate :           service.user + "/group",                         // UPDATE
    groupDeleteSingle :     service.user + "/group", //+groupId,             // DELETE
    groupDeleteMulti :      service.user + "/group",


    // SENDING RESULT
    resultUsage :           service.result + "/usage",
    resultSending :         service.result + "/sending",
    resultSendingResult :   service.result + "/sending/result",


    // SEND
    downloadSampleFile :    service.requestMsg + "/download/excel",  // 주소록입력 샘플파일 다운로드
    sendRequest :           service.requestMsg + "/sendReq",          // 발송 요청

}
export default apiConfig;


