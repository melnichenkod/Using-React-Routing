import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export default function RouterHooksTest({match}) {
  // const history = useHistory();
  // const location = useLocation();
  // const params = useParams();
  // const match = useRouteMatch()
  // console.log(match);
  //console.log(history);
  // console.log(location);
  //console.log(params);
  // console.log(props);
  return (
    <h1>{match.params.id}</h1>
  )
}
