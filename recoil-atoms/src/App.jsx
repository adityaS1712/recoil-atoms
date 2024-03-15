import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobAtom, myMessagingAtom, networkAtom, notificationAtom } from './assets/atoms'
import {RecoilRoot,useRecoilState,useRecoilValue} from 'recoil'

function App() {

  return (  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>);

}

function MainApp(){

  const networkNotificationCount= useRecoilValue(networkAtom)
  const jobAtomVal= useRecoilValue(jobAtom)
  const notificationCount=useRecoilValue(notificationAtom)
  const [messggeCount,setMessageAtomCount]= useRecoilState(myMessagingAtom)
  return ( 
    <>
    <button>Home ()</button>
    <button>My Network ({networkNotificationCount >=100 ?"99+":networkNotificationCount})</button>
    <button>Jobs ({jobAtomVal})</button>
    <button>Messaging ({messggeCount})</button>
    <button>Notification ({notificationCount})</button>

    <button onClick={()=>  {setMessageAtomCount(messggeCount+1);
    }}>Me</button>

    </>
  )

}

export default App
