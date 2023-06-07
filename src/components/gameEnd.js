import { useState } from "react";

function Game(props){

  let sommapla1 = props.sommaplay1.reduce(props.sum) 
  let sommaban = props.sommabanco.reduce(props.sum)

  function Ending( {fine } ){

    if(fine=="playlose"){
      return <p>Player lost {sommapla1} to {sommaban} </p>
    }else{
      return <p>Player won {sommapla1} to {sommaban} </p>
    }

  }

  function Ending2({fine, secondo}){

    let sommapla2 = secondo.reduce(props.sum)

    if(fine=="playlose"){
      return <p>Players lost {sommapla2 + sommapla1} to {sommaban*2} </p>
    }else{
      return <p>Players won {sommapla2 + sommapla1} to {sommaban*2} </p>
    }

  }

  return(
    <div className="text-center">

      {(props.sommaplay2.length) ?
        <Ending2 fine={props.risulta} secondo={props.sommaplay2} />
      :
        <Ending fine={props.risulta} />
      }

    </div>
  )
}


export default Game