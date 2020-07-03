let userName ='';

userName/*이부분은 if문에서 괄호 안에 내용에 해당하는 부분이다.*/  ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
 //조건이 진실일경우 왼쪽에 있는 구문이 실행되고 거짓일경우 오른쪽 구문이 실행된다
const userQuestion ='What your name?';
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = ''; //'',"",0등은 조건문에서 false로 나타난다

switch (randomNumber){
  case 0:
  console.log('It is certain');
  break;

  case 1:
  console.log('It is decidedly so');
  break;

  case 2:
  console.log('Reply hazy try again');
  break;

  case 3:
  console.log('Cannot predict now');
  break;

  case 4:
  console.log('Do not count on it');
  break;

  case 5:
  console.log('My sources say no');
  break;

  case 6:
  console.log('Outlook not so good');
  break;

  case 7:
  console.log('Signs point to yes');
  break;
}