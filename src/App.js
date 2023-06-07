import * as React from "react";
import './App.css';
import { useState, useEffect, useId } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDiamond, faClover } from '@fortawesome/free-solid-svg-icons'

import Navbar from "./components/navBar"
import GameStart from "./components/gameStart"
import GameCond from "./components/gameCond"
import GameEnd from "./components/gameEnd"

function App() {

  // ---------------------------

  /* We need to treat each array here as an useState, if we dont, then each 
  deck[ carte ][pescato] */
  const [mazzi, setMazzi] = useState( ["fiori","spade","quadri","cuori"] )
  
  const [deck, setDeck] = useState({
    spade: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
    fiori: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
    cuori: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
    quadri: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ],
  })

  const [ gioca1, setGioca1 ] = useState( [] )
  const [ banco, setBanco ] = useState([])
  const [ gioca2, setGioca2] = useState([])
  const [classe, setClasse] =  useState("")

  let classis = []
  let base = useId()

  const [sommaplay1, setSommaplay1] = useState([])
  const [sommabanco, setSommabanco] = useState([])
  const [sommaplay2, setSommaplay2 ] = useState([])
  const [ con, setCon ] = useState("")

  const [ player, setPlayer ] = useState("")
  const [ choose, setChoose ] = useState(true)
  const [versus, setVersus] = useState(false)
  const [versus2, setVersus2 ] = useState(false)

  function summing(total, num){
    return total + num
  }

  function lose(){
    setCon("playlose")
    setChoose( true )
  }

  function win(){
    setCon("playwin")
    setChoose( true )
  }

  //USEEFFECT CAN kEEP TRACK of the values of useState
  //IF STATEMENT are not javascript expressions so it wnt work
  //while setGioca is used after teh value is introduced
  // we use setSomma for teh win/lose conditions of the game
  useEffect(()=>{
    let att;

    if(sommaplay1.length && sommabanco.length ){
      let sommapla1 = sommaplay1.reduce(summing) 
      let sommaban= sommabanco.reduce(summing)
      let sommapla2;
      let somma, sommatot;

      if(sommaplay2.length){
        sommapla2 = sommaplay2.reduce(summing)

        somma = sommaplay1.concat(sommaplay2)
        sommatot = somma.reduce(summing)
      }

      //we need to change this for the 2 player lost
      if(sommapla1 > 21){
        lose()
      }else if(sommapla2> 21){
        lose()
      }else if(sommatot > 42){
        lose()
      }


      if( versus && !sommaplay2.length ){

        //by including the versus in the useEffect we
        //made sure that the clearInterval will trigger if the condition 
        //is no longer true, like a backsafe 
        if( sommaban< sommapla1 ){
          att= setInterval(() => {
            pesca("banco")
          }, 1000);

        }else{
          setVersus( false )
        }

        if( sommapla1 == sommaban ){
          lose()
        }else if(sommapla1<sommaban && sommaban<= 21 ){
          lose()
        }else if( sommaban> 21){
          win()
        }

      }else if(versus && versus2 ){

        if( sommaban*2< sommatot ){
          att= setInterval(() => {
            pesca("banco")
          }, 1000);

        }else{
          setVersus( false )
        }

        if( sommatot == sommaban*2 ){
          lose()
        }else if(sommatot<sommaban*2 && sommaban*2 <= 42 ){
          lose()
        }else if( sommaban*2 > 42){
          win()
        }

      }

    }

    return () => {
      clearInterval(att);
    }

  }, [sommaplay1, sommaplay2, sommabanco, versus, versus2])


  function pesca(play, multi){

    if( mazzi.length == 0 ){
      window.alert("No more cards to play")

      setTimeout(function () {
        window.location.reload()
      }, 1000);
    }else{

      /* we retrieve the random index and from there we get the strin of the values. */
      /* even the pescato number is an index, considering we have to cut the arrays,  */
      let seme = Math.floor( Math.random()* mazzi.length )
      let carte = mazzi[seme]

      let pescato = Math.floor( Math.random()* deck[carte].length )

      //deck[carte][pescato]
      if( carte == "fiori"){
        classis = ["fa-solid fa-clover iconablack", 2] 
      }else if( carte == "spade" ){
        classis = ["fa-solid fa-heart iconablackrev", 2] 
      }else if( carte == "quadri" ){
        classis = ["fa-solid fa-diamond iconared", 2] 
      }else{
        classis = ["fa-solid fa-heart iconared", 2]
      }

      if(play == "giocatore1"){
        (multi) ? drawplay1(carte, classis, multi) : drawplay1(carte, classis)

      }else if(play == "banco"){
        drawbank(carte, classis)

      }else if( play == "giocatore2" ){
        drawplay2(carte, classis)
      }


      let raggio = deck[carte]
      raggio.splice( pescato, 1 )

      //splice modifies the array inline
      //slice returns a modyfied version of the array, so we can use it
      setDeck((x)=>({
        ...x,
        [carte]: raggio
      }))

      if(raggio.length == 0){

        let semecopy = mazzi
        semecopy.splice( seme, 1 )
        setMazzi( semecopy )
      }

    }
  }

  //we need to introduce a IF for when to go down and when to go LEFT
  function drawplay1(carte, classis, mult){

    (mult) ? setClasse("sinistra 1.5s") : setClasse("sotto 1.5s")

    //we need 2000
    setTimeout(()=>{
      setClasse("")
    }, 750)

    setTimeout(()=>{
      setGioca1((x)=>([
        ...x,
        <div key={base + carte + classis[1]} className="player1" >
          <i className={classis[0]}></i>
          <p> {classis[1]} </p>
        </div>
      ]))

    }, 750)

    setSommaplay1((x)=> ([...x, classis[1]]))
    //from here we need to put losign condition
  }

  function drawplay2(carte, classis){
    setClasse("destra 1.5s")

    setTimeout(()=>{
      setClasse("")
    }, 760)

    setTimeout(()=>{
      setGioca2((x)=>([
        ...x,
        <div key={base + carte + classis[1]} className="player1" >
          <i className={classis[0]}></i>
          <p> {classis[1]} </p>
        </div>
      ]))

    }, 760)

    setSommaplay2((x)=> ([...x, classis[1]]))
  }

  function drawbank(carte, classis){
    setClasse("sopra 1.5s")

    setTimeout(()=>{
      setClasse("")
    }, 760)

    setTimeout(()=>{
      setBanco((x)=>([
        ...x,
        <div key={base + carte + classis[1]} className="player1" >
          <i className={classis[0]}></i>
          <p> {classis[1]} </p>
        </div>
      ]))

    }, 760)

    setSommabanco((x)=> ([...x, classis[1]]))
  }

  function first(e){
    e.preventDefault()

    setCon("")
    setGioca1([])
    setSommaplay1([])
    setGioca2([])
    setSommaplay2([])
    setBanco([])
    setSommabanco([])
    setVersus( false )
    setVersus2( false )

    let formdata = new FormData( e.target )
    let final = Object.fromEntries( formdata.entries())

    setChoose( false )

    if(final.player=="player1"){
      setPlayer("1player")
      pesca("giocatore1")

      setTimeout(()=>{
        pesca("banco")
      }, 760)

    }else{
      setPlayer("2players")
      pesca("giocatore1", final.player)

      setTimeout(()=>{
        pesca("giocatore2")
      }, 760)

      //so, considering we added an animation timeout
      //to the card function, IF we want to use it again
      //without the results random card replacing the first
      //we need to timeout it after the 750ms of the first
      //tp finish and set its card on the useState() value
      setTimeout(()=>{
        pesca("banco")
      }, 1550)

    }
    
  }

  return (
    <div className="container-fluid p-0 ">

      <Navbar />

      <GameCond 
        banco={banco}
        gioca1= {gioca1}
        gioca2= {gioca2}
        classe= {classe}
        player={player}
      />

      <GameStart 
        choose={choose} 
        versus={versus}
        setVersus={setVersus}
        versus2={versus2}
        setVersus2={setVersus2}
        sommaplay2= {sommaplay2}

        pesca={pesca}
        first={first}
      />

      {con &&
        <GameEnd sum={summing} 
                 sommaplay1={sommaplay1} 
                 sommaplay2={sommaplay2}
                 sommabanco={sommabanco} 
                 risulta={con}
        />
      }

      <footer className="bottom-0 text-center text-white p-1 w-100 footer mt-5">
        <span>Code made by Angelo Zarate, check his </span>
        <span><a href="https://codepen.io/misterlinux" className="text-warning">Github,</a></span>
        <span> powered by </span>
        <span><a href="https://platform.openai.com/" className="text-warning">OpenAI</a></span>
        <span></span>
      </footer>

    </div>
  );
}

export default App;
