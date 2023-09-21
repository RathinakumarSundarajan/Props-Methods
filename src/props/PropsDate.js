import React from 'react'

const PropsDate = (props) => {

    const month = props.xxx.toLocaleString('en-US',{month:'long'});
    const day = props.xxx.toLocaleString('en-US',{day:'2-digit'});
    const year = props.xxx.getFullYear();

  return (
    <div className='card container text-center'>
        <h2>{month}</h2>
        <h2>{day }</h2>
        <h2>{year}</h2>
      
    </div>
  )
}

export default PropsDate
