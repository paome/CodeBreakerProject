let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (validateInput(input.value)==false){
      return false;
    }else if (validateInput(input.value)==true){
      attempt.value++;
    };
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
function validateInput (val){
  if (val.length==4){
    return true
  }else{
  label="Guesses must be exactly 4 characters long.";
setMessage(label);
return false};
}

function getResults(input){
  results.innerHTML=input;
<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">
}
//implement new functions here
