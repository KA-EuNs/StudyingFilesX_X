//내 나이 선언
const myAge = 23;

//처음 2년
let earlyYears =2;

earlyYears *=10.5;


//처음 2년을 이미 계산 했으므로 내 나이에서 2년을 뺀다.
let laterYears = myAge - 2;

//개는 2살 이후부터 4년씩 나이를 먹으르로 내 나이에서 4를 곱한다.
laterYears *= 4; //


//처음 2년을 10.5개년으로 곱한 값과 나머지 4개년으로 곱한값을 더한다.
let myAgeInDogYears = earlyYears + laterYears;

const myName= 'ES'.toLowerCase();
console.log(myName.length); //스트링에 글자 수를 알려준다.

console.log(`My name is ${myName}. I am ${myAge} years old in human
years which is ${myAgeInDogYears} years old in dog years.`);