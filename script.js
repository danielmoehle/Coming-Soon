var email = document.getElementById("input")



function validateEmail(){
    return String(email.value)
      .toLowerCase()
      .match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      );
  };


