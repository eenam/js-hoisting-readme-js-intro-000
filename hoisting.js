// variable hoisting

var maybe = 'maybe';
function callMe() {
  return 'maybe'
}

//function hoisting

var crazy = 'hey!!!'

function thisIsCrazy() {
  console.log('hey!!!')
}
thisIsCrazy();
