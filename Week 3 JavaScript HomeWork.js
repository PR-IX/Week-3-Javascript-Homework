//Step 1

let ages = [3,9,23,64,2,8,28,93];
let total = 0;

console.log(ages[ages.length - 1] - ages[0])

//Step 2

for(let i = 0; i < ages.length; i++){
    total += ages[i];
}
let avg = total / ages.length;

console.log(avg)

//Step 3

let names = ['Sam', 'Tommy', 'Tim', 'Sally','Buck', 'Bob'];
let sum = 0;
for(let i = 0; i < names.length; i++){
  sum += names[i].length;
}
let average = sum / names.length;
console.log(average)

//Step 4

let firstNames = "";
for(let i = 0; i < names.length; i++){
  firstNames += names[i] + ' ';
}
console.log(firstNames)

//How do you access the last element of any array? [Array.length - 1]

//How do you access the first element of any array? Array[0]

//Step 5

nameLengths = [] = [names.length];
for(let i = 0; i < names.length; i++){
  nameLengths[i] = names[i].length;
}

console.log(nameLengths)

//Step 6

let sumOfArray = 0;
for(let i = 0; i < nameLengths.length; i++){
  sumOfArray += nameLengths[i];
}
console.log(sumOfArray);

//Step 7

function concatenate(word,n){
  let multiplyWord = "";
  for(let i = 0; i < n; i++){
    multiplyWord += word;
  }
  return multiplyWord;
}

console.log(concatenate('sam', 3));

//Step 8

function fullName(firstName, lastName){
  return firstName + ' ' + lastName;
}
console.log(fullName('mike', 'johnson'));

//Step 9

function greaterThen100(arr){ 
  sum = 0;
  for(let i = 0; i < arr.length; i++)
    sum += arr[i];
    if(sum > 100){
      return true;
    }else{
      return false;
    }
}
 console.log(greaterThen100(ages));

//Step 10

function avgElements(ages){
  let total = ages.reduce((acc,c) => acc + c, 0);
  return total / ages.length;
}

console.log(avgElements(ages));
 
//Step 11

let youngAges = [2,4,7,9];
let oldAges = [70,84,93,81];

function twoArrays(youngAges,oldAges){
  let arrayOneTotal = youngAges.reduce((acc,c) => acc + c,) / youngAges.length;
  let arrayTwoTotal = oldAges.reduce((acc,c) => acc + c,) / oldAges.length;
  if(arrayOneTotal > arrayTwoTotal){
    return true;
  }else{
    return false;
  }
}
console.log(twoArrays(youngAges, oldAges));

//Step 12

function willBuyDrink(boolean,n){
  let isHotOutside = boolean;
  let moneyInPocket = n;
  if(isHotOutside == true && moneyInPocket > 10.50){
    return true;
  }else{
    return false;
  }
}

console.log(willBuyDrink(true, 60));
  
