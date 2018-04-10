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

function getResults(val){
  let html='<div class="row"><span class="col-md-6">' + val + '</span><div class="col-md-6">';
  let count=0
  for(i=0; i < val.length; i++){

  if (val.charAt(i) == answer.value.charAt(i)){
      html += '<span class="glyphicon glyphicon-ok"></span>';
      count++;


    }else if (answer.value.indexOf(val.charAt(i))>=0) {
    html += '<span class="glyphicon glyphicon-transfer"></span>';


  }else{
      html += '<span class="glyphicon glyphicon-remove"></span>';


    }

}
results.innerHTML = html + '</div>'
if (count==4){
  label="You Win! :)";
  setMessage(label);
  return true}
  else{
    return false}
}
//   for(j=0; j<answer.value.length; j++){
//      if (answer.value.charAt(j)==val.charAt(i)){
//        var contain=true}
//      };
//  }else if (contain==true) {
//      results.innerHTML+='<span class="glyphicon glyphicon-transfer"></span>';
