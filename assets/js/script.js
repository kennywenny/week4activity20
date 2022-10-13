var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  if (!element.matches('.box')) {
    console.log('Did not click on box')
    return
  }
  const dataNumber = element.getAttribute('data-number')
  // const alternativeDataNumber = element.dataset.number
  console.log('Did click on box')
  element.textContent = dataNumber
});
