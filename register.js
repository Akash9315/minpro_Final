async function addmessage() {
  document.querySelector("#name").style = " border : none";
  document.querySelector("#email").style = " border : none";
  document.querySelector("#phone").style = " border : none";
  document.querySelector("#password").style = " border : none";
  let name = document.querySelector("#name").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (name == "" && phone == "" && email == "" && password == "") {
    document.querySelector("#name").style = " border : 2px solid red";
    document.querySelector("#email").style = " border : 2px solid red";
    document.querySelector("#phone").style = " border : 2px solid red";
    document.querySelector("#password").style = " border : 2px solid red";
    return;
  }
  if (name == "" || name.length < 6) {
    document.querySelector("#name").style = " border : 2px solid red";
    return;
  }

  if (phone == "" || phone.length < 10) {
    document.querySelector("#phone").style = " border : 2px solid red";
    return;
  }

  if (email == "") {
    document.querySelector("#email").style = " border : 2px solid red";
    return;
  }
  if (password == "" || password.length < 8) {
    document.querySelector("#password").style = " border : 2px solid red";
    return;
  }
  console.log(name);
  let url = "http://localhost:5000/postMessage";
  const data = {
    name: `${name}`,
    email: `${email}`,
    phone: `${phone}`,
    password: `${password}`,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data),
  };

  await fetch(url, options);
  document.querySelector("#name").style = " border : none";
  document.querySelector("#email").style = " border : none";
  document.querySelector("#phone").style = " border : none";
  document.querySelector("#password").style = " border : none";

  document.querySelector("#name").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  alert("REGISTRATION SUCCESSFUL!!");
}

function validate() {
  var name = document.getElementById("name").value;
  var username = document.getElementById("username").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  // var password1 = document.getElementById("password1").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if (username.length < 10) {
    text = "Invalid Username";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if (password.length >= 5 || password.length < 10) {
    text = "Please Enter Correct Password";
    error_message.innerHTML = text;
    return false;
  }

  // if((password1.length >= 5) || password1.length < 10 ){
  //   text = "Please Re-enter Correct Password";
  //   error_message.innerHTML = text;
  //   return false;
  // }

  alert("Form Submitted Successfully!");
  return true;
}
