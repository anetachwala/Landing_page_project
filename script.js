const navBar = document.querySelector(".navbar__main-nav");
const fname = document.querySelector("#fname");
const number = document.querySelector("#number");

const toggleMenu = () => {
  navBar.classList.toggle("active");
};

const formValidation = () => {

  if (!fname.value.length) {
    alert("Tell us your first name");
    fname.focus();
    return false;
  };

  if (fname.value.length < 3) {
    alert("Name should consist of at least three letters");
    fname.focus();
    return false;
  };

  if (!number.value) {
    alert("Share your phone number so we could call you!");
    number.focus();
    return false;
  };

  if (number.value < 100000000) {
    alert("Phone number should consist of at least nine digits");
    number.focus();
    return false;
  };
};

const onlyLetters = () => {
  fname.value = fname.value.replace(/[^A-Za-z]/g, '');
};

const onlyDigits = () => {
  number.value = number.value.replace(/\D/g, '')
};