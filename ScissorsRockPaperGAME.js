const getUserChoice = userInput => //유저의 선택 입력받는 함수
{ //function expression & arrow function & indense function
  userInput = userInput.toLowerCase(); //입력받은 string 소문자로 변형
  if (userInput === 'rock'){
   
    return 'rock';
  }
  else if (userInput === 'paper'){
   
    return 'paper';
  }
  else if (userInput === 'scissors'){
    
    return 'scissors';
  }
  else {
    console.log('Error');
  }
}



function getComputerChoice(){ //컴퓨터에 선택을 입력받는 함수
 num = Math.floor(Math.random() * 3); //0~2까지 랜덤으로 뽑히고 그에 따라 가위바위보가 지정된다.
 if(num === 0) {
   return 'scissors';
 }
 else if(num === 1){
   return 'rock';
 }
 else if(num ===2){
   return 'paper';
 }
}




const determineWinner = (userChoice, computerChoice) => //승자를 결정하는 함수 조건문을 이용해 사용자와 컴퓨터의 선택을 비교한다.
{
 
 if(userChoice === computerChoice){
    return 'game was a tie';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Winner is computer';
    }
    else {
      return 'Winner is You';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Winner is computer';
    }
    else return 'Winner is You';
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Winner is computer';
    }
    else return 'Winner is You';
  }
 
}
 
 function playGame (){ //게임을 실행시키는 함수
  const userChoice = getUserChoice('paper'); //변수 userChoice를 getUserChoice()함수와 일치시키기
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice)) ;}
  
playGame();

















