function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
  document.getElementById("loginMessage").innerHTML = `
      Você está conectado! Clique no botão abaixo para continuar.
      <br>
      <button onclick="location.href='/mainPages/main.html'">Ir para a página principal</button>
  `;


  localStorage.setItem('google_id_token', response.credential);


  const data = jwt_decode(response.credential);
  console.log(data);
}

window.onload = function () {
  google.accounts.id.initialize({
      client_id: "264720699697-avr42k6pgg860um0j2gd23639fha7k5g.apps.googleusercontent.com",
      callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      size: "medium",
      shape: "pill",
      theme: "filled_blue"
  });

  google.accounts.id.prompt();
};
