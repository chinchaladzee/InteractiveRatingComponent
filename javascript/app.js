let Button = document.querySelector(".submit");
let Numbers = document.querySelectorAll(".chosen_number");
let FirstBox = document.querySelector(".d_first");
let SecBox = document.querySelector(".d_sec");
let ChosenNumberClass = document.querySelector(".chs_number");
var ChooseNumber;
var PastNumber;

Numbers.forEach(function (pastNum) {
  pastNum.addEventListener("click", function () {
    if (PastNumber) {
      PastNumber.classList.remove("button_active");
    }
    ChooseNumber = pastNum.innerHTML;
    PastNumber = pastNum;
    pastNum.classList.add("button_active");
  });
  Button.addEventListener("click", function () {
    if (!PastNumber) {
      return true;
    } else {
      FirstBox.classList.add("d_unactive");
      SecBox.classList.add("d_active");
      ChosenNumberClass.innerHTML = ChooseNumber;
    }
  });
});
