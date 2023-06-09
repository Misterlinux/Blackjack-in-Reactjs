import React from "react"

function Game(props){

  let sommapla1 = props.sommaplay1.reduce(props.sum) 
  let sommaban = props.sommabanco.reduce(props.sum)

  function Ending( {fine } ){

    if(fine==="playlose"){
      return <h5 className="w-50 m-auto p-2 bg-danger text-white">Player lost {sommapla1} to {sommaban} </h5>
    }else{
      return <h5 className="w-50 m-auto p-2 bg-success text-white">Player won {sommapla1} to {sommaban} </h5>
    }

  }

  function Ending2({fine, secondo}){

    let sommapla2 = secondo.reduce(props.sum)

    if(fine==="playlose"){

      if( sommapla1 > 21 ){
        return <p className="w-50 m-auto p-2 bg-danger text-white">Players lost {sommapla1} to {sommaban} </p>
      }else if( sommapla2 > 21){
        return <p className="w-50 m-auto p-2 bg-danger text-white">Players2 lost {sommapla2} to {sommaban} </p>
      }else{
        return <p className="w-50 m-auto p-2 bg-danger text-white">Players lost {sommapla2 + sommapla1} to {sommaban*2} </p>
      }
    }else{
      return <p className="w-50 m-auto p-2 bg-success text-white">Players won {sommapla2 + sommapla1} to {sommaban*2} </p>
    }

  }

  return(
    <div className="text-center my-3">

      {(props.sommaplay2.length) ?
        <Ending2 fine={props.risulta} secondo={props.sommaplay2} />
      :
        <Ending fine={props.risulta} />
      }

    </div>
  )
}


export default Game