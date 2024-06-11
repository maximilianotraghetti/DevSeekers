const formulario = document.querySelector("#formulario");
const inputNodes = document.querySelectorAll("form input");

console.log(inputNodes);

formulario.addEventListener("submit", async (e) => {
  
  const user = document.getElementById("user").value;
  const mail = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("passwordconfirm").value;
  console.log(user);
  console.log(mail);
  console.log(password);
  console.log(confirmPassword);

    setTimeout(() => {
      location.href = 'index.html'
  }, 3000);


  const peticion = await fetch("http://localhost:4000/usuarios", {
    method: "POST",
    body: JSON.stringify({usuario: user, mail, contraseña: password}),
    headers: {
      "Content-type": "application/json"
    }
  })

  const response = await peticion.json()

  console.log(response);
});
