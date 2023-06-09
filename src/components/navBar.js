import React from "react";

function Bar(){

    return(
      <div className="naviga row me-0 ">
        <div className="col-3 col-md-2 d-flex aling-content-center justify-content-center">
          <div className="imma"></div>
        </div>
        <div className="col-9 text-white my-1 p-0" style={{fontSize: "0.7em"}}>
          
          <p className="fs-6 d-flex d-md-none"><b>Blackjack in ReactJs</b></p>
          <p className="fs-4 d-none d-md-flex"><b>Blackjack in ReactJs</b></p>
          <p>
            Play in one or two players mode and try to beat the automated dealer 
            <i class="fa-solid fa-robot ms-1"></i>
          </p>

        </div>
      </div>
    )

}

export default Bar