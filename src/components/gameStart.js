import React from "react";
import { useId } from "react";


function Start(props){

  let base = useId()

  function Playing(){

    if(props.sommaplay2.length){

      return(
        <div className="row my-3">
          <div className="col-6 text-center">
            <button className="btn btn-success" disabled={props.versus} 
                    onClick={ ()=>{ props.pesca("giocatore1", "player2")} }> 
              Hit 
            </button>
            <button className="btn btn-danger ms-1" disabled={props.versus} 
                    onClick={ ()=> props.setVersus(true) }> 
              Stand 
            </button>
          </div>

          <div className="col-6 text-center">
            <button className="btn btn-success" disabled={!props.versus || props.versus2 } 
                    onClick={ ()=>{ props.pesca("giocatore2")} }> 
              Hit 
            </button>
            <button className="btn btn-danger ms-1" disabled={!props.versus || props.versus2 } 
                    onClick={ ()=>{ props.setVersus2(true) } }> 
              Stand 
            </button>
          </div>
        </div>
      )
    }

    return(
      <div className="text-center my-3">
        <button className="btn btn-success" disabled={props.versus} onClick={ ()=>{ props.pesca("giocatore1")} } > Continue </button>
        <button className="btn btn-danger" disabled={props.versus} onClick={ ()=> props.setVersus(true) }> Stand </button>
      </div>
    )

  }

  return(
    <div>

      {props.choose ?
        <div className="row justify-content-center me-0">
          <form className="row col-10 col-sm-5" onSubmit={props.first}>

            <div className="input-form col-6 text-center my-3">
              <input id={base+ "radio1"} type="radio" className="input-form-check" name="player" 
                     value="player1" defaultChecked={true} />
              <label htmlFor={base+ "radio1"} className="input-form-label"> 
                One player 
              </label>

              <div>
                <i className="fa-solid fa-gamepad"></i>
              </div>
            </div>

            <div className="input-form col-6 text-center my-3">
              <input id={base+ "radio2"} type="radio" className="input-form-check" name="player" value="player2"/>
              <label htmlFor={base+ "radio2"} className="input-form-label"> 
                Two players 
              </label>

              <div>
                <i className="fa-solid fa-gamepad mx-1"></i>
                <i className="fa-solid fa-gamepad"></i>
              </div>
            </div>

            <div className="col-12 text-center">
              <button className="btn btn-success">Play</button>
            </div>
          </form>
        </div>
      :
        <Playing />
      }

    </div>
  )

}

export default Start