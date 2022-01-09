async function addmessage() {
  document.querySelector("#input").style = "none";
  let body = document.querySelector("#input").value;
  if (body == "") {
    document.querySelector("#input").style = " border : 2px solid red";
    return;
  }
  console.log(body);

  let url = "http://localhost:5000/postMessage";
  const data = { messagebody: `${body}` };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data),
  };

  await fetch(url, options);
}
