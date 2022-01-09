async function post() {
  document.querySelector("#cmip").style = "none";
  document.querySelector("#cmname").style = "none";
  let ip = document.querySelector("#cmip").value;
  let ipname = document.querySelector("#cmname").value;
  if (ip == "" && ipname == "") {
    document.querySelector("#cmip").style = " border : 2px solid red";

    document.querySelector("#cmname").style = " border : 2px solid red";
    return;
  }
  if (ipname == "") {
    document.querySelector("#cmname").style = " border : 2px solid red";
  }
  if (ip == "") {
    document.querySelector("#cmip").style = " border : 2px solid red";
  }

  let url = "http://localhost:5000/postComment";
  const data = { name: `${ipname}`, body: `${ip}` };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: JSON.stringify(data),
  };

  await fetch(url, options);
  console.log(ip);
  let parent = document.querySelector("#comment");
  let oldchild = parent.innerHTML;
  let child = ` <li>
                    <h5>${ipname}</h5>
                    <p>${ip}</p>
                </li>`;

  parent.innerHTML = child + oldchild;
  document.querySelector("#cmip").value = "";
  document.querySelector("#cmname").value = "";
}
