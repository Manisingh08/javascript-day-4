

let num = prompt('write your marks here:- ');
function percentage(num, per)
{
  return (num/100)*per;
}
switch (true) {
    case (num <=20000):
        console.log(percentage(+num+ 10));
        break;
    case (num <= 10001):
        console.log(percentage(+num+ 7));
        break;
    case (num <= 5001):
        console.log(percentage(+num+ 5));
        break;
    case (num <= 0001):
        console.log(percentage(+num+ 2));
        break;
   
}