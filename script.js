const label = document.querySelectorAll(".menu-label")
const div = document.querySelectorAll(".menu-div")
const icon = document.querySelectorAll(".fa-angle-down")

label[0].addEventListener("click", () => {
  div[0].classList.toggle("hidden")
  icon[0].classList.toggle("fa-angle-up")
})

label[1].addEventListener("click", () => {
  div[1].classList.toggle("hidden")
  icon[1].classList.toggle("fa-angle-up")
})

label[2].addEventListener("click", () => {
  div[2].classList.toggle("hidden")
  icon[2].classList.toggle("fa-angle-up")
})