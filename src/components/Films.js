import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


export default function Films() {
  const [list, setList] = useState([]);
  const getList = async () => {
    const res = await fetch('https://swapi.dev/api/films/');
    const data = await res.json();
    setList(data.results)
  }

  useEffect(() => (
    getList(), [])
  )
  return (
    <div>
      <ul>
        {list.map(({url, title}) => (
          <li key={url}>
            <Link to={`/films/${url.slice(0 , -1).split('/').pop()}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
