document.getElementById('login form').addEventListener('submit',function(event)
{
event.preventDefault();
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
if(username === 'username'&& password ==="password"){
   alert ("Login successfull!");
}
else{
   alert ('Invalid username or password.Please try again.');
}
});