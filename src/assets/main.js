let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here

  }

  function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000);
    answer.toString();
    while (answer.value.length<4) {
    answer.value="0"+ answer.value;
  };

}

function setMessage(label){
  message.innerHTML=label;
}
function validateInput (answer){
  if (answer.value.length==4){
    return true
  }else{
  label="Guesses must be exactly 4 characters long.";
setMessage(label);
return false};
}


//implement new functions here
