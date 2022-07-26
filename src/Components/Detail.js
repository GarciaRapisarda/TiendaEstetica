import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const Detail = () => {
  let params = useParams()

  const [datos, setResultado] = useState([]);
  const [loading, setLoading] = useState(true);
      

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + params.id)
    .then(res=>res.json())
    .then(json=> {
      setResultado(json)
      console.log(json)
    })
     .finally(() => { setLoading(false) })
    }, [params.id]);
    
     

  return (
    <div>
      {datos && ( <div className='d-flex justify-content-center pt-5'>
        <div className="card" style={{ "width": "18rem" }}>
        <img src={datos.image} alt={datos.name} />
        <div className="card-body">
        <h5 className="card-title text-dark">{datos.category}</h5>
        <h5 className="card-title text-dark">{datos.title}</h5>
        <p className="card-text text-dark">{datos.description}</p>
        <div className="btn btn-primary">${datos.price}</div>
      </div>
      </div>
      </div>)}
    </div>
  )
}

export default Detail