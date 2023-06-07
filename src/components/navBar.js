import React from "react";

function Bar(){


    return(
      <div className="naviga row me-0 ">
        <div className="col-3 d-flex aling-content-center justify-content-center">
          <img src="./blackcard.png" className="img-fluid " alt="" />
        </div>
        <div className="col-9 text-white my-2 p-0" style={{fontSize: "0.7em"}}>
          
          <p><b>Blackjack in ReactJs</b></p>
          <p>Draw cards to react 21, or use the stand button to play against the dealer </p>
          <p>In 2 players mode your goal is 42 </p>

        </div>
      </div>
    )

}

export default Bar