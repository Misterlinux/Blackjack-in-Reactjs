import * as React from "react";
import "../App.css"

function Game(props) {

  return (
    <div className="semicircle row justify-content-center align-content-center m-0">

      <div className="col-10 d-flex justify-content-center spazio1">
        {props.banco}
      </div>

      <div className="col-10 d-flex justify-content-center mt-3 position-relative" style={{height: "5em"}} >
        <div className="mazzo"></div>
        {props.classe &&
          <div className="mazzo1" style={{animation: props.classe }}></div>
        }
      </div>



      {(props.player=="1player") ?
        <div className="row mt-2 mt-sm-5 text-center">
          <div className="col-12 justify-content-center d-flex spazio1">
            {props.gioca1}
          </div>
        </div>
      :
        <div className="row mt-2 mt-sm-5 text-center">
          <div className="col-6 d-flex justify-content-center spazio1">
            {props.gioca1}
          </div>
          <div className="col-6 d-flex justify-content-center spazio1">
            {props.gioca2}
          </div>
        </div>
      }

    </div>
  );
}

export default Game;
