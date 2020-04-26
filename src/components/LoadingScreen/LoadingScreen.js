import React from "react";
import "./LoadingScreen.css";
import { usePromiseTracker } from "react-promise-tracker";




// export default function loadingScreen() {
//   const { promiseInProgress } = usePromiseTracker();


//   return (
//     promiseInProgress &&
//     <div className={'wholepage'}>
// <div class="loader"></div>
//     </div>
//   );
// }

const LoadingScreen = props => {
  const { promiseInProgress } = usePromiseTracker();

  return promiseInProgress && 
     <div className={'wholepage'}>
<div class="loader"></div>
    </div>
};

export default LoadingScreen