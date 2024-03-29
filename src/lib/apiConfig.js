const service = {
    user : "/user",            // localhost:8001
    result : "/result",        // localhost:8002
    requestMsg : "/request",   // localhost:8011
    broker : "/brokermanager", // localhost:8005
    auth : "/auth",            //localhost:8007
};


const apiConfig = {

    // AUTH
    authLogin :                              service.auth + "/login",
    authRegister :                           service.auth + "/register",
    authRegisterCheckEmailDuplication :      service.auth + "/register/check_email",
    authRegisterCheckUsernameDuplication :   service.auth + "/register/check_username",
    authRefreshToken :                       service.auth + "/refresh_token",

    // BROKER
    brokerList :            service.broker + "/broker/list",                // 브로커 리스트 조회
    brokerTypeList :        service.broker + "/broker/typeList",            // 전송타입 별 브로커 리스트 조회

    // USER_GROUP
    groupSelectList :       service.user + "/group",                        // GET 그룹 리스트 조회
    groupSelectDetail :     service.user + "/group", //+groupId,            // GET 그룹에 해당하는 주소록 리스트 조회
    groupCreate :           service.user + "/group/create",                 // POST 그룹 생성
    groupCopy :             service.user + "/group/copy",                   // POST 그룹 복사
    groupUpdate :           service.user + "/group",                        // PUT
    groupDeleteSingle :     service.user + "/group", //+groupId,            // DELETE
    groupDeleteMulti :      service.user + "/group/list",                   // DELETE
    groupPhoneCreate :      service.user + "/group/address",//+groupId      // POST
    groupPhoneDelete :      service.user + "/group/address",//+groupId      // DELETE

    // USER_PHONEBOOK
    phoneBookSelectList :       service.user + "/address",                  // GET
    phoneBookSelectListFilter : service.user + "/address/filter",           // GET (name/phone/email)
    phoneBookSelectPage :       service.user + "/address/page",             // GET (page)
    phoneBookSelectPageFilter : service.user + "/address/page/filter",      // GET( name/phone/email, page)
    phoneBookCreate:        service.user + "/address",                      // POST
    phoneBookCreateList:    service.user + "/address/list",                 // POST
    phoneBookeDeleteList:   service.user + "/address",                      // DELETE

    // USER_PHONE
    phoneSelect:            service.user + "/phone",                        // GET
    phoneCreate:            service.user + "/phone",                        // POST
    phoneUpdate:            service.user + "/phone",                        // PUT
    phoneDelete:            service.user + "/phone",                        // DELETE

    // USER_EMAIL
    emailSelect:            service.user + "/email",                        //GET
    emailCreate:            service.user + "/email",                        //POST
    emailUpdate:            service.user + "/email",                        //PUT
    emailDelete:            service.user + "/email",                        //DELETE

    // USER_MESSAGE__TEMPLATE
    messageTemplateList:    service.user + "/messageTemplate/list",         // 메세지 템플릿 리스트 조회
    createMessageTemplate:  service.user + "/messageTemplate/create",       // 메세지 템플릿 등록
    deleteMessageTemplate:  service.user + "/messageTemplate/delete",       // 메세지 템플릿 삭제

    // USER_SENDING_RULE
    userSendingRuleInfo:    service.user + "/sendingRule/info",             // 중계사 비율 기본값 조회
    userSendingRuleReg:     service.user + "/sendingRule/reg",              // 중계사 비율 기본값 설정

    // REQUEST
    downloadSampleFile :    service.requestMsg + "/download/excel",         // 주소록입력 샘플파일 다운로드
    sendRequest :           service.requestMsg + "/sendReq",                // 발송 요청

    // RESULT
    resultUsage :                 service.result + "/usage",
    resultSending :               service.result + "/sending/card",
    resultSendingList :           service.result + "/filteredResultList",
    resultSendingResult :         service.result + "/sending/{sendingId}",
    resultSendingBrokerResult :   service.result + "/sending/{sendingId}/broker",
    resultSendingTxResult :       service.result + "/sending/{sendingId}/tx",
    resultSendingTxResultDetail : service.result + "/sending/{sendingId}/tx/{txId}",



}
export default apiConfig;


