function gId(id) {
  return document.getElementById(id);
}

function changeBg(id, color) {
  gId(id).style.backgroundColor = color;
}

// Style changers
function successGreen() {
  changeBg("submit-btn", "rgb(0, 189, 0)");
  gId("submit-btn").innerHTML = "Success!";
}

function failedBlack() {
  changeBg("submit-btn", "black");
  gId("submit-btn").innerHTML = "Please try again :(";
}

function loader() {
  changeBg("submit-btn", "cornflowerblue");
  gId("submit-btn").innerHTML =
    '<img src="resources/loader.svg" id="loader" style="height: 15px;"></img>';
  gId("loader").classList.add("loader-spin");
}
function initialButtonState() {
  //gId("submit-btn").classList.add("msg-btn");

  //gId("submit-btn").onmouseenter.style.backgroundColor = "#000099";

  gId("submit-btn").innerHTML =
    'Register<img src="resources/arrow.svg" style="height: 15px;"></img>';

  changeBg("submit-btn", "#fa3c83");
}

const idInput = document.getElementById('membership-id-input');

function onlyAllowNumberInputs(e) {
  let isnum;
  isnum = /^\d+$/.test(e.target.value);
  if(!isnum) {
    let y = e.target.value.slice(0, e.target.value.length - 1)
    if(!(/^\d+$/.test(y))) {
      e.target.value = "";
    } else {
      e.target.value = y;
    }
  }
}

idInput.addEventListener("input", (e) => {
  onlyAllowNumberInputs(e);
})

const phoneInput = document.getElementById('contact-phone');

phoneInput.addEventListener("input", (e) => {
  onlyAllowNumberInputs(e);
})


const scriptURL =
  "https://";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader();

  // comment this later START
  const formData = new FormData(document.querySelector('form'))
  for (var pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
  successGreen();
  setTimeout(initialButtonState, 3000);
  return;
  //comment this later END


  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successGreen();
      setTimeout(initialButtonState, 3000);
    })
    .catch((error) => {
      console.log(error);
      failedBlack();
      setTimeout(initialButtonState, 4000);
    });
});
