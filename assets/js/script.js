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

  // if element is not class="box", then do nothing
  // if the data state is hidden:
  //   * make it unhidden
  //   * make the contents of the element equal to the data-number
  // TODO: Complete function
});
