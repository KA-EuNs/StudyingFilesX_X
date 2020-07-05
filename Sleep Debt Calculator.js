const getSleepHours = day => { //일주일동안 각요일에 얼마나 잤는지 받는 함수
    if(day === 'monday'){
      return 8;
    }
    else if(day === 'tuesday'){
      return 7;
    }
    else if(day === 'wednesday'){
      return 6;
    }
    else if(day === 'thursday'){
      return 7;
    }
    else if(day === 'friday'){
      return 5;
    }
    else if(day === 'saturday'){
      return 6;
    }
    else if(day === 'sunday'){
      return 10;
    }
  }
  
  
  
  const getActualSleepHours = () => { //각 요일에 잔 시간을 모두 더한다
   return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  const getIdealSleepHours = idealHours => idealHours * 7; //내가 원하는 하루권장수면시간의 7을 곱한다.
  //arrow function & function expression & indense function
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(6); //하루권장수명시간은 6시간이다.
    console.log(`Your actualSleepHours = ${actualSleepHours}`);
    console.log(`Your idealSleepHours = ${idealSleepHours}`);
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    }
    else if(actualSleepHours > idealSleepHours){
      console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed this week`);
    }
    else if(actualSleepHours < idealSleepHours){
      console.log(`You got ${idealSleepHours - actualSleepHours} hours less sleep than you needed this week, Get some rest`);
    }
  }
  calculateSleepDebt();
  
  
  
  
  
  
  
  