
const computerChoicefn=() =>{
    let random=Math.random()*3;
    random=Math.floor(random)
    //console.log(random)
    let choice=''
    if(random===0){
      return choice='rock'
    }
    else if(random===1){
      return choice='paper'
    }
    else if(random===2){
      return choice='scissor'
    }
  }
  let computerChoice=computerChoicefn();
  //console.log(computerChoice,myChoice)
  function winner(computerChoice,myChoice){
    if(myChoice===computerChoice){
      console.log('It\'s a tie')
    }
    else if(myChoice==='paper'){
      computerChoice==='rock'?console.log('Congratulations, you won!'):console.log('Sorry, computer won!');
    }
    else if(myChoice==='rock'){
      computerChoice==='scissor'?console.log('Congratulations, you won!'):console.log('Sorry, computer won!');
    }
   else if(myChoice==='scissor'){
      computerChoice==='paper'?console.log('Congratulations, you won!'):console.log('Sorry, computer won!')
    
  }
  }
  
  const myChoice='paper'
  winner(computerChoice,myChoice) 
  