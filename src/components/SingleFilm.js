import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const SingleFilm = () => {
  const [data, setData] = useState([]);
  const {id} = useParams();

  
  const getData = async () => {
    const res = await fetch(`https://swapi.dev/api/films/${id}/`);
    const data = await res.json();
    setData(data)
  }
  console.log(Object.entries(data));
  console.log(id);
  useEffect(() => getData(),[]);
  return (
    <div>
      <ul>
        {Object.entries(data).map(([key, value]) => (

          <li key={key}><b>{key}:</b>{value}</li>
        ))}
      </ul>
    </div>
  )
}