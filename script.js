

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Error: Please fill all fields.");
  } else if (!email.includes("@")) {
    alert("Error: Email must contain '@'.");
  } else {
    alert("Success! Form submitted.");
  }
});
