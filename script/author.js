document.addEventListener("DOMContentLoaded", function () {
  window.saveDetails = function () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;

    $.ajax({
      method: "POST",
      contentType: "application/json",
      url: "http://localhost:8083/api/v1/author",
      async: true,
      data: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: [{ contact: contact }],
      }),
      success:function(data){
        alert("saved!")
      },
      error:function(xhr,exception){
        alert("Error")
      }
      
    })
  };

  function getData() {}
});
