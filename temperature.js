//절대온도
const kelvin = 0; //const는 변하지 않는 상수를 선언할 떄

//섭씨온도
let celsius = kelvin - 273; //let는 변수를 선언할 때
//변수를 선언하고 아무런 값도 저장하지 않으면 undefined로 저장된다
console.log(`The temperature is ${celsius} degrees Celsius`);
//화씨온도
let fahrenheit = celsius * (9/5) +32;

//섭씨온도에서 화씨온도로 변환할 때 10진수로 얻기위해 반올림을 한다.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//string interpolation == template literals을 이욜

let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton`);
console.log(typeof Newton); //변수에 type를 알려준다..