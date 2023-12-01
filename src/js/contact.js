const response = document.querySelector("#response");
const loader = document.querySelector("#loader");
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#useremail");
const userMessage = document.querySelector("#usermessage");

form.addEventListener("submit", handleSumbit);

async function handleSumbit(event) {
  event.preventDefault();
  response.classList.add("none");
  loader.classList.remove("none");
  const apiResponse = await fetch(
    "https://formsubmit.co/ajax/diegomatera@gmail.com",
    {
      method: "POST",
      body: new FormData(event.target),
    }
  )
    .then((res) => res.json())
    .then((resJson) => {
      if (resJson.success) {
        loader.classList.add("none");
        response.classList.remove("none");
        response.innerText = "Mensaje enviado exitosamente";
      }
    })
    .catch((err) => {
      console.log(err);
      loader.classList.add("none");
      response.classList.remove("none");
      response.innerText = "Error al enviar el mensaje";
    })
    .finally(() => {
      userName.value = "";
      userEmail.value = "";
      userMessage.value = "";
    });
}
