'use strict';

document.getElementsByTagName('button')[0].setAttribute('onclick', 'partyFunction()')

let partyFunction = function() {
  let party = document.getElementsByTagName('body')[0]
  if (party.getAttribute('class') == 'party') {
    party.setAttribute('class', '')
  } else {
    party.setAttribute('class', 'party')
  }
}