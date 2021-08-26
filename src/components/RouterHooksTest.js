import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function RouterHooksTest() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  
  //console.log(history);
  // console.log(location);
  console.log(params);
  return (
    <h1>RouterHooksTest</h1>
  )
}
