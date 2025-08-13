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
