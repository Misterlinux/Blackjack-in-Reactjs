import * as React from "react";
import "../App.css"

function Game(props) {

  return (
    <div className="semicircle row justify-content-center align-content-center m-0 ">

      <div className="col-12 d-flex justify-content-center align-content-center spazio2">
        {props.banco}
      </div>

      <div className="col-10 d-flex justify-content-center position-relative spaziomaz">
        <div className="mazzo align-self-center"></div>
        {props.classe &&
          <div className="mazzo1" style={{animation: props.classe }}></div>
        }
      </div>

      {(props.player=="1player") ?
        <div className="row mt-2 mt-sm-5 text-center">
          <div className="col-12 justify-content-center align-content-center d-flex spazio1">
            {props.gioca1}
          </div>
        </div>
      :
        <div className="row mt-2 mt-sm-5 text-center p-0">
          <div className="col-6 p-0 d-flex justify-content-center align-content-center spazio1">
            {props.gioca1}
          </div>
          <div className="col-6 p-0 d-flex justify-content-center align-content-center spazio1">
            {props.gioca2}
          </div>
        </div>
      }

    </div>
  );
}

export default Game;
