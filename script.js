const email = document.getElementById("emailFieldBottomSide");
const message = document.getElementById("emailmessagebot");
email.addEventListener("keyup", (e) => {
  const validEmail = e.currentTarget.value.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  );
  message.textContent = validEmail ? "" : "Please check your Email";
});

const email1 = document.getElementById("emailFieldTopSide");
const message1 = document.getElementById("emailmessagetop");
email1.addEventListener("keyup", (e) => {
  const validEmail = e.currentTarget.value.match(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  );
  message1.textContent = validEmail ? "" : "Please check your Email";
});