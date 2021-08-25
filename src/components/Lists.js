import React from 'react';
import { useEffect, useState } from 'react';

export default function Lists({endpoint, keyToShow}) {
  let [list, setList] = useState([])
  
  const api = `https://swapi.dev/api/${endpoint}/`;
  const getData = async () => {
    const res = await fetch(api);
    const data = await res.json();
    setList(data.results)
  }
  useEffect(() => {
    setList([])
    getData()
  },[endpoint]);
  return (
    <ul>
      {list.map((item) => <li key={item.url}>{item[keyToShow]}</li>)}
    </ul>
  )
}
