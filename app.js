// Random no generator //
function randomgenerator(min, max) {
  let no = Math.random() * max - min + 1;
  no = Math.floor(no) + min;

  if (no == 1) document.body.style.background = "#215B67";
  else if (no == 2) document.body.style.background = "#96BF18";
  else if (no == 3) document.body.style.background = "#EE1702";
  else if (no == 4) document.body.style.background = "#FECD11";
  else if (no == 5) document.body.style.background = "#05BFCE";
  else document.body.style.background = "#0060FF";
}

let btn_submit = document.getElementsByClassName("btn-submit");
