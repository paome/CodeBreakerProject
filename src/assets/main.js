let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let guessingDiv = document.getElementById('guessing-div');
let replayDiv = document.getElementById('replay-div');

function guess() {
    let input = document.getElementById('user-guess');
    if (validateInput(input.value)==false){
      return 1;
    }else if (validateInput(input.value)==true){
      attempt.value++;
    };
    if (getResults(input.value)==true){
      label="You Win! :)";
      setMessage(label);
      return true;

    }else if((getResults(input.value)==false) && (attempt.value>9)){
      label="You Lose! :(";
      setMessage(label);
      return false;
    }else{
      label="Incorrect, try again.";
      setMessage(label);
    }
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

function getResults(val){
let results = document.getElementById('results');
  let html='<div class="row"><span class="col-md-6">' + val + '</span><div class="col-md-6">';
  let count=0
  for(i=0; i < val.length; i++){

  if (val.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
      count++;


    }else if (answer.value.indexOf(val.charAt(i))> -1) {
    html += '<span class="glyphicon glyphicon-transfer"></span>';
  }else{
      html += '<span class="glyphicon glyphicon-remove"></span>';
    }
}
  html += '</div></div>';
results.innerHTML += html;
if (count==4){
  return true
}else{
 return false
}
}


function showAnswer(lol){
  let code = document.getElementById('code');
  if(lol===false){
    code.className += " failure";
    code.innerHTML = answer.value;
  }
  else if (lol===true) {
    code.className += " success";
    code.innerHTML = answer.value;
}
}
function showReplay(){
  guessingDiv.style = "display:none";
  replayDiv.style = "display:block";
}
//   <label id="code" class="code col-md-12">????</label>

//      if (answer.value.charAt(j)==val.charAt(i)){
//        var contain=true}
//      };
//  }else if (contain==true) {
//      results.innerHTML+='<span class="glyphicon glyphicon-transfer"></span>';
