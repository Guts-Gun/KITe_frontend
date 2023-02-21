import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilBarChart,
  cilGroup,
  cilEnvelopeOpen,
  cilAddressBook,
  cilScreenSmartphone,
  cilPhone,
  cilBookmark,
  cilChatBubble,
  cilChart,
  cilListNumberedRtl
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'User Console',
    to: '/userConsole',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: '발송',
  },

  {
    component: CNavItem,
    name: '문자메시지 전송',
    to: '/sendSms',
    icon: <CIcon icon={cilScreenSmartphone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '이메일 전송',
    to: '/sendEMail',
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '기본 분배 비율 설정',
    to: '/UserSendingRule',
    icon: <CIcon icon={cilListNumberedRtl} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: '팩스',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: '발송하기',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: '예제',
  //       to: '/register',
  //     },
  //   ],
  // },
  {
    component: CNavTitle,
    name: '설정',
  },
  {
    component: CNavGroup,
    name: '그룹 관리',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '그룹 리스트',
        to: '/groupList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '주소록 관리',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '주소록 추가',
        to: '/receiverMake',
      },
      {
        component: CNavItem,
        name: '주소록 리스트',
        to: '/receiverList'+"?page=0",
      },
    ],
  },
  {
    component: CNavGroup,
    name: '발신번호 관리',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '번호 리스트',
        to: '/senderPhoneList',
      },
      {
        component: CNavItem,
        name: '이메일 리스트',
        to: '/senderEmailList',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '템플릿 관리',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '템플릿 리스트',
        to: '/templateList',
      },
      // {
      //   component: CNavItem,
      //   name: '템플릿 생성',
      //   to: '/register',
      // },
    ],
  },
  {
    component: CNavTitle,
    name: '발송 결과 확인',
  },
  {
    component: CNavItem,
    name: '발송 리스트',
    to: '/resultList',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
]

export default _nav
