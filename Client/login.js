function login() {
    let username = $('#email').val();
    let password = $('#password').val();
  
    if (username != undefined && password != undefined) {
      let jsonData = JSON.stringify({
        'username': username, 'password': password
      });
       const url =  "http://127.0.0.1:3000/login";
  
      var client = new XMLHttpRequest();
  
      client.open("POST", url, false);
      client.setRequestHeader("Content-Type", "application/json");
      client.send(jsonData);
  
      if (client.status == 200) {
  
        if (client.responseText === "0") {
          alert("Wrong credentials!");
        } else {
          window.location.replace("http://127.0.0.1:5500/Client/index.html");
          localStorage.setItem("email", email); 
        }
      } else {
        alert("Error");
      }
    }
    else {
      alert("Wrong input!")
    }
  }