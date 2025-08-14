document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".menu_item");

  const onClick = (event) => {
    for (element of elements) {
      element.classList.remove("active");
    }
    event.target.classList.add("active");

    const container = document.getElementById(event.target.dataset.id);

    console.log(container);
  };

  for (element of elements) {
    element.addEventListener("click", onClick);
  }
});

const anim = document.getElementById("animation");
const modal = document.getElementById("modal__burger");
const burgerMenu = document.querySelector(".burger__wrapp");
const anim__wrapp = document.querySelector(".anim__wrapp");

burgerMenu.addEventListener("click", () => {
  anim.style.visibility = "unset";
  modal.style.transform = "translate(0 , 0)";
  anim__wrapp.style.visibility = "unset";
});

anim.addEventListener("click", () => {
  anim.style.visibility = "hidden";
  modal.style.transform = "translate(-100%, 0)";
  anim__wrapp.style.visibility = "hidden";
});
