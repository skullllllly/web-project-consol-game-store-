const emailinput=
document.getElementById("email");

emailinput.addEventListener("input",
function() { // الكود لم يعمل معي لا اعلم لماذا:(
 
  if (!emailvalue.includes("@"))
  {
    emailinput.classList.add("error");
  
   
  }
  else {
    emailinput.classList.remove("error");
  }
});

