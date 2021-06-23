var submitted=false;

function alert(){
    document.getElementById("alert").style.display="block";
}

function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0) {
        alert();
        return false;
    }
    return true;
}

function validateEmail() {

    var email = document.getElementById('email-check').value;
    if(email.length == 0) {
        alert();
        return false;
    }
    return true;

}

function validateSubject() {
    var subject = document.getElementById('subject').value;
    if(subject.length == 0) {
        alert();
        return false;
    }
    return true;
}

function validateMessage() {
    var message = document.getElementById('message-check').value;
    if(message.length == 0) {
      alert();
      return false;
    }
    return true;
}


function validateForm() {
        if ((validateName() && validateSubject() && validateMessage() && validateEmail())==true){

            document.getElementById('form-message-success').style.display='block';
            document.getElementById('alert').style.display='none';
            var clear = document.getElementsByClassName('form-control');
            clear.value="";
            return true;
        }

        else{
            return false;
        }
}   