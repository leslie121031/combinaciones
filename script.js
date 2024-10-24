let crown_button = document.getElementById("crown_botton");

console.log(crown_button);

crown_button.addEventListener("click", changeCrown);

let crown_image = document.getElementById("crown_image");
let crown_counter = 1;

function changeCrown() {
  crown_counter = crown_counter += 1;

  if (crown_counter > 3) {
    crown_counter = 1;
  }
  crown_image.src = "./img/c" + crown_counter + ".png";
  console.log("change crown");
}

let dress_botton = document.getElementById("dress_botton");

console.log(dress_botton);

dress_botton.addEventListener("click", changeDress);

let dress_image = document.getElementById("dress_image");
let dress_counter = 1;

function changeDress() {
  dress_counter = dress_counter += 1;

  if (dress_counter > 3) {
    dress_counter = 1;
  }

  dress_image.src = "./img/r" + dress_counter + ".png";
  console.log("change dress");
}

let eyes_botton = document.getElementById("eyes_botton");
console.log(eyes_botton);

eyes_botton.addEventListener("click", changeEyes);
let eyes_image = document.getElementById("eyes_image");
let eyes_counter = 1;

function changeEyes() {
  eyes_counter = eyes_counter += 1;

  if (eyes_counter > 3) {
    eyes_counter = 1;
  }
  eyes_image.src = "./img/o" + eyes_counter + ".png";
  console.log("change eyes");
}
