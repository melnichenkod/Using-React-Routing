import React from 'react';
import { useEffect, useState } from 'react';

export default function Lists({endpoint}) {
  let [list, setList] = useState([])
  
  const api = `https://swapi.dev/api/${endpoint}/`;
  const getFilms = async () => {
    const res = await fetch(api);
    const data = await res.json();
    setList(data.results)
  }
  useEffect(() => {
    setList([])
    getFilms()
  },[endpoint]);
  return (
    <ul>
      {list.map(({url, title}) => <li key={url}>{title}</li>)}
    </ul>
  )
}
