const container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  const element = event.target;
  if (!element.matches('.box')) {
    return
  }
  const dataNumber = element.getAttribute('data-number')
  // const alternativeDataNumber = element.dataset.number
  element.textContent = dataNumber
});
