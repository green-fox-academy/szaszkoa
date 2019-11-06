'use strict';

const radio = document.getElementsByTagName('input');
const iLoveCatsBTN = document.getElementsByTagName('button')[0];
const signUpBTN = document.getElementsByTagName('button')[1];
const form = document.getElementsByTagName('form')[0];

// If you choose Dog or Cat, it should enable the sign up button
form.addEventListener('click', enableSignUp);

function enableSignUp() {
  if (radio['cat'].checked == true || radio['dog'].checked == true) {
    signUpBTN.removeAttribute('disabled');
  } else if (radio['goldfish'].checked == true && radio['no'].checked == true){
    signUpBTN.removeAttribute('disabled');
  } else {
    signUpBTN.setAttribute('disabled', 'true');
  };
};

// If you choose Yes for cat facts, it should enable the I love cats button

form.addEventListener('click', iLoveCats);

function iLoveCats() {
  radio['yes'].checked == true ? iLoveCatsBTN.removeAttribute('disabled') : iLoveCatsBTN.setAttribute('disabled', 'true');
};

// Clicking on a button should alert:
//  Thank you, you've successfully signed up for cat facts
// If you pick Victor and no to cat facts it should enable the sign up button only
// Clicking this time should display: Sigh, we still added you to the cat facts list

signUpBTN.addEventListener('click', singUpAlert);
iLoveCatsBTN.addEventListener('click', singUpAlert);

function singUpAlert() {
  let alertNormalPerson = 'Thank you, you\'ve successfully signed up for cat facts!';
  let alertWeirdPerson = 'Sigh, we still added you to the cat facts list :(';
  radio['goldfish'].checked == true && radio['no'].checked == true ? alert(alertWeirdPerson) : alert(alertNormalPerson);
};
