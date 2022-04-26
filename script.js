const err = document.querySelector("error");

function getInput() {
  let val = document.querySelector("input").value;
  let formatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById("p22").value = "";
  if (formatRegex.test(val)) {
    document.getElementById("p22").innerText = "Thank you for subscribing!";
  } else {
    document.getElementById("p22").innerText = "Please Enter a Valid Email";
    document.getElementById("error").style.display = "inline";
  }
  setTimeout(function () {
    location.reload();
  }, 3500);
}
