const service = {
    user : "/user", //localhost:8001
    result : "/result", //localhost:8002
    requestMsg : "/request", //localhost:8011
};

const version = '/v1';


const apiConfig = {
    
    /* USER */
    // GROUP
    groupSelectList :       service.user + "/group",                         // GET
    groupSelectDetail :     service.user + "/group", //+groupId,             // GET
    groupCreate :           service.user + "/group/create",                  // POST
    groupCopy :             service.user + "/group/copy",                    // POST
    groupUpdate :           service.user + "/group",                         // PUT
    groupDeleteSingle :     service.user + "/group", //+groupId,             // DELETE
    groupDeleteMulti :      service.user + "/group/list",                    // DELETE

    //SEND_PHONE
    phoneSelect:            service.user + "/phone",                        //GET
    phoneCreate:            service.user + "/phone",                        //POST
    phoneUpdate:            service.user + "/phone",                        //PUT
    phoneDelete:            service.user + "/phone",                        //DELETE

    //SEND_EMAIL
    emailSelect:            service.user + "/email",                        //GET
    emailCreate:            service.user + "/email",                        //POST
    emailUpdate:            service.user + "/email",                        //PUT
    emailDelete:            service.user + "/email",                        //DELETE
    

    // SENDING RESULT
    resultUsage :           service.result + "/usage",
    resultSending :         service.result + "/sending",
    resultSendingResult :   service.result + "/sending/result",


    // SEND
    downloadSampleFile :    service.requestMsg + "/download/excel",  // 주소록입력 샘플파일 다운로드
    sendRequest :           service.requestMsg + "/sendReq",          // 발송 요청

}
export default apiConfig;


