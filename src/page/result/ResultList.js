import React, {useEffect, useState} from 'react'
import {CCard, CCardBody, CCardHeader, CRow,} from '@coreui/react'
import SendingResultTable from "./component/SendingResultTable";
import axios from "axios";
import apiConfig from "../../lib/apiConfig";
import SendingResultSearchOption from "./component/SendingResultSearchOption";
import {useSelector} from "react-redux";
import Loading from 'src/lib/Loading/Loading';
import Pagination from "react-js-pagination";

function ResultList() {

  const {auth} = useSelector(({auth}) => ({auth: auth}));
  let headers = null;
  if (auth != null) {
    const accessToken = auth.accesstoken;
    headers = {'Authorization': 'Bearer ' + accessToken};
  }


  const [loading, setLoading] = useState(false);

  const [resultList , setResultList] = useState([]);

  const [pageData, setPageData] = useState({
    totalPage: 0,
    page: 1,
    size: 0,
    start: 0,
    end: 0,
    prev: false,
    next: false,
    totalElements : 1
  })


  useEffect(() => {
    setLoading(false);
    handleFetch(1);
  }, []);


  // 메세지 템플릿 리스트 조회
  const handleFetch = (selectedPage) => {
  setLoading(true);
  axios.get(apiConfig.resultSendingList+"?page="+ selectedPage,{headers: headers})
  .then(response => {
    const data = response.data;
    setResultList(data.content);

    setPageData({
    totalPage: 0,
    page: data.number+1,
    size: data.size,
    start: 1,
    end: data.totalPages,
    prev: data.first? false: true,
    next: data.last? false: true,
    totalElements : data.totalElements
  }); 
    setLoading(false);
  })
  .catch(error => console.error('Error', error));
};

  // 페이지 클릭
  const handlePageChange = (selectedPage) => {
    handleFetch(selectedPage);
  };

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <CRow>
            <strong>발송 리스트</strong>
          </CRow>
        </CCardHeader>

        <CCardBody>
          <SendingResultSearchOption/>
          <CCard className="mt-4 mb-4">
          { loading ? <Loading /> : <SendingResultTable sendingResultList={resultList}/>}
         
            {
              resultList.length > 0 ? (<Pagination key={pageData.page}
                activePage={pageData.page}
                itemsCountPerPage={pageData.size}
                totalItemsCount={pageData.totalElements}
                pageRangeDisplayed={10}
                prevPageText={"‹"}
                nextPageText={"›"}
                onChange={handlePageChange}
              />) : ''
            }
          </CCard>
        </CCardBody>
      </CCard>


    </>
  );
}

export default ResultList;
