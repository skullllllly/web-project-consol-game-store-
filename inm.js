function checkPassword() { // الكود لم يعمل معي لا اعلم لماذا:(
  const emailinput = document.getElementById("email");
  const emailvalue = passwordInput.value;

  if (!emailvalue.includes("@")) {
    emailinput.classList.add("error");
  } else {
    emailinput.classList.remove("error");
  }
}