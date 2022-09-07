function ValidateEmail(mail, name, tarea)
{
  if(mail.value == "") return false;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(mail.value.match(mailformat))
  {
    if(mail.value != "" && name.value != "" && tarea.value != "") alert("Your Message sent successfully!!");
    document.form.text1.focus();
    return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  document.form1.text.focus();
  return false;
  }
}

