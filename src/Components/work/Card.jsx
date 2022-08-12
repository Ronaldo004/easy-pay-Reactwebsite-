import React from 'react'

const Card = ({Cardapi}) => {
  return (
    <>
    {Cardapi.map((currElem,id)=>{
        let{logo,title,info}=currElem;
        return(
        <div className="w-card">
          <div className="w-logo">
        <i class={logo}></i>
        </div>
        <h2>{title}</h2>
        <p className="w-para">
          {info}
        </p>
        

        </div>
        )
       
      })}
    </>
  )
}

export default Card