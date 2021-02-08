// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];




const validateCred = card => {
 
  let newCreditCard = [...card].reverse();//copy the array and reverse it 
  for (let i = 0; i < newCreditCard.length; i++) {
    if (i % 2 != 0) {//if  the index iss odd
      newCreditCard[i] = newCreditCard[i] * 2;//take the value inside it and multiply by 2 
    }if (newCreditCard[i] > 9) {//if the value after doubling it is bigger than 9
      newCreditCard[i] -= 9;//substract 9 from it till it's smaller than 9
    }
 //here i allready got my modified array 
  }//exiting the loop
let sum = newCreditCard.reduce((a, b) => a + b, 0);//sum oll the values in the array.
  if (sum % 10 === 0) {//if the sum you got leaves no remainder when devided by 10
  return true;//returns true when the card is valid
  } else {//if there is a remainder
   return false;//returnfalse if the card is not valid 
}
};

//console.log(validateCred(invalid3));


//check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = cards =>{
  let invalidCard = [];
for(let j = 0; j < cards.length ; j++ ){

    if(validateCred(cards[j]) === false){ //if the callback on the card is false
    
    invalidCard.push(cards[j]);//push that card to the invalidCard array
 }
       
}
return invalidCard;
}
console.log(findInvalidCards(batch));


// identify the credit card companies that have possibly issued these faulty numbers.
let idInvalidCardCompanies = invalidCards =>{
  let arrayOfcompanies = [];
  for (let card=0 ; card < invalidCards.length ; card ++){
     if(invalidCards[card][0] == 3){
      if (!arrayOfcompanies.includes('Amex')){
          arrayOfcompanies.push('Amex');
      }
     }
     if(invalidCards[card][0] == 4){
       if(!arrayOfcompanies.includes('Visa')){
        arrayOfcompanies.push('Visa');
       }
     }
      if(invalidCards[card][0] == 5){
       if(!arrayOfcompanies.includes('Mastercard')){
        arrayOfcompanies.push('Mastercard');
       }
     }
     if(invalidCards[card][0] == 6){
       if(!arrayOfcompanies.includes('Discover')){
        arrayOfcompanies.push('Discover');
       }
     }
  }

return arrayOfcompanies;
}


console.log(idInvalidCardCompanies((findInvalidCards(batch))));


