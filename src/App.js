import * as React from "react";
import './App.css';
import { useState, useEffect, useId } from "react";

import Navbar from "./components/navBar"
import GameStart from "./components/gameStart"
import GameCond from "./components/gameCond"
import GameEnd from "./components/gameEnd"
import Foot from "./components/rulesFoot"

function App() {

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
        console.log("we get this-----")
        lose()
      }else if(sommapla2> 21){
        lose()
      }else if(sommatot > 42){
        lose()
      }

      if( versus && !sommaplay2.length ){

        if( sommaban< sommapla1 ){
          att= setInterval(() => {
            pesca("banco")
          }, 1000);

        }else{
          setVersus( false )
        }

        if( sommapla1 === sommaban ){
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

        if( sommatot === sommaban*2 ){
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

    if( mazzi.length === 0 ){
      window.alert("No more cards to play")

      setTimeout(function () {
        window.location.reload()
      }, 1000);
      
    }else{

      let seme = Math.floor( Math.random()* mazzi.length )
      let carte = mazzi[seme]

      let pescato = Math.floor( Math.random()* deck[carte].length )

      if( carte === "fiori"){
        classis = ["fa-solid fa-clover iconablack", deck[carte][pescato]] 
      }else if( carte === "spade" ){
        classis = ["fa-solid fa-heart iconablackrev", deck[carte][pescato]] 
      }else if( carte === "quadri" ){
        classis = ["fa-solid fa-diamond iconared", deck[carte][pescato]] 
      }else{
        classis = ["fa-solid fa-heart iconared", deck[carte][pescato]]
      }

      if(play === "giocatore1"){
        (multi) ? drawplay1(carte, classis, multi) : drawplay1(carte, classis)

      }else if(play === "banco"){
        drawbank(carte, classis)

      }else if( play === "giocatore2" ){
        drawplay2(carte, classis)
      }


      let raggio = deck[carte]
      raggio.splice( pescato, 1 )

      setDeck((x)=>({
        ...x,
        [carte]: raggio
      }))

      if(raggio.length === 0){
        let semecopy = mazzi
        semecopy.splice( seme, 1 )
        setMazzi( semecopy )
      }

    }
  }

  function drawplay1(carte, classis, mult){

    (mult) ? setClasse("sinistra 1.5s") : setClasse("sotto 1.5s")

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

    if(final.player==="player1"){
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

      <Foot />

    </div>
  );
}

export default App;
