import ReactDOM from 'react-dom/client'
import './index.css'

const pads = [
  {name:'Q',
   sound: 'Heater 1',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {name:'W',
   sound:'Heater 2',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {name:'E',
   sound:'Heater 3',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'}, 
  {name:'A',
   sound:'Heater 4',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'}, 
  {name:'S',
   sound:'Heater 6',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {name:'D',
   sound:'Dsc_Oh',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {name:'Z',
   sound:'Kick and Hat',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {name:'X',
   sound:'Kick',
  source:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {name:'C',
   sound:'Cev H2',
  source:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  ];


  document.addEventListener('keydown',(e) => {
    const key = e.key.toUpperCase()
    const element = document.getElementById(key)
    if (element != null){
    element.click()}
  });


  const DrumButton = (props) => {
    const pressed = (e) => {
      console.log(e.target)
      e.target.children[0].play()
      const display = document.getElementById('display')
      display.innerHTML = props.sound
    }
    
    return(
    <button
      onClick={pressed}
      id={props.id}
      className='drum-pad'>
      <audio
       className='clip'
       src={props.src}
      id={props.id} />
        {props.id}
      </button> 
    )
  }

    
const App = (props) => {
  return (
  <div id='drum-machine'>
      {props.pads.map((element)=>(
        <DrumButton 
          sound={element.sound}
          id={element.name}
          src={element.source}/>
      ))
      }
  <div id='display'></div>
  </div>)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App pads={pads} />
)
