const yargs = require('yargs');
const mpg = require('mpg123');
 
var player = new mpg.MpgPlayer();
 
var playOptions = {
  description: 'Play music',
  alias: 'p',
  demand: true
}
var volDecrease = {
  description: 'Decrease the volume',
  alias: 'v-',
  demand: true
}
var volIncrease = {
  description: 'Increase the volume',
  alias: 'v+',
  demand: true
}
var PauseOption = {
  description: 'Pause the music',
  demand: true
}
var resumeOption = {
  description: 'Resume the music',
  alias: 'r',
  demand: true
}
var argv = yargs
  .command('play','Play the music',{
    music: playOptions
  })
  .command('vol++','Increase the volume',{
    volIncrease: volIncrease
  })
  .command('vol--','Decrease the volume',{
    volDecrease: volDecrease
  })
  .command('pause','Pause music',{
    Pause: PauseOption
  })
  .command('resume','Resume music',{
    resume: resumeOption
  })
  .help()
  .argv;
 
  console.log(yargs.argv);
  console.log(process.argv);

  //function to play music
  function playMusic(){
    player.play('./someMusic.mp3');
  }


  //function to pause music
  function PauseMusic(){
    player.pause()
  }

  //function to stop the music
  function stop(){
    player.stop()
  }
  //function to increase vol
  function increase(){

  }

  //function to decrease the vol
  function decrease(){

  }

  var command = argv._[0];
  console.log(command);
  if(command === 'play'){
    playMusic();
  }else if(command === 'pause'){
    PauseMusic();
  } else if(command === 'stop'){
    stop();
  } else if(command === 'vol++'){
    increase();
  } else if(command === 'vol--'){
    decrease();
  } else{
    console.log('Invalid command');
  }

