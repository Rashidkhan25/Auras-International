function sendMail () {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }

  emailjs.send("service_om9ulj9","template_d3xijn9",parms).then(alert("Email Send Successfully"));
}

function sendEmail () {
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
    company : document.getElementById("company").value,
    service : document.getElementById("service").value,
  }

  emailjs.send("service_om9ulj9","template_bmind99",parms).then(alert("Email Send Successfully"));
}