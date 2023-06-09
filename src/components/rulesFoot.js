import React from "react";
import rules from "../assets/result.png"

function Footer(){


  return(
    <div>

      <div className="row justify-content-center me-0 d-flex d-md-none my-5">
        <div className="col-10">

          <div className="d-flex justify-content-between align-items-center p-2 text-white" 
              href="#apri" role='button' data-bs-toggle="collapse" style={{backgroundColor: "brown"}}>
            <p>Blackjack Rules</p>
            <i className="fa-solid fa-angle-down"></i>
          </div>

          <div className="collapse" id="apri">
            <div className='card card-body'>

                <img src={rules} className='img-fluid' alt="blackjack-rules" />
                <p className='my-3'>
                  In Blackjack, you draw<b>(hit)</b> cards to reach 21 without exceeding it <b>(bust)</b>, 
                  then you use the <b>stand</b> button to let the dealer play, higher value wins.
                </p>
                <p>
                  In <b>2 players mode</b> your cards sum up to reach 42, while the dealer cards double their value, 
                  each player still needs not to exceed 21, in case of a draw dealer wins.
                </p>
            </div>
          </div>

        </div>
      </div>


      <div className="row justify-content-center d-none d-md-flex me-0">
        <div className="col-11">

          <div className="row my-3">

            <div className="col-3 d-flex justify-content-between align-items-center text-white" role='button'
                 data-bs-toggle="collapse" data-bs-target="#ampio" style={{maxHeight: "10vh", backgroundColor: "brown"}}>
              <span>Blackjack rules</span>
              <i className="fa-solid fa-angles-right my-3"></i>
            </div>

            <div className="col-9 collapse collapse-horizontal" id='ampio' style={{maxHeight: "35vh"}}>
              <div className="card card-body">

                <div className="row me-0" >
                  <div className="col-7 col-md-5 d-flex justify-content-center">
                    <img src={rules} className='img-fluid align-self-center' alt="blackJack-rules" />
                  </div>
                  <div className="col-5 col-md-7">
                    <p className='my-2'>
                      In Blackjack, you draw<b>(hit)</b> cards to reach 21 without exceeding it <b>(bust)</b>, 
                      then you use the <b>stand</b> button to let the dealer play, higher value wins.
                    </p>
                  </div>
                  <div className="col-12 mt-2">
                    <p>
                      In <b>2 players mode</b> your cards sum up to reach 42, while the dealer cards double their value, 
                      each player still needs not to exceed 21, in case of a draw dealer wins.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <footer className="bottom-0 text-center text-white p-1 w-100 footer mt-3">
        <span>Code made by Angelo Zarate, check his </span>
        <span><a href="https://github.com/Misterlinux?tab=repositories" className="text-warning">Github,</a></span>
        <span> powered by </span>
        <span><a href="https://react.dev/" className="text-warning">ReactJs</a></span>
        <span></span>
      </footer>

    </div>
  )
}

export default Footer