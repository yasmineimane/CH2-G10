const taniya = document.querySelector(".taniya");
const john = document.querySelector(".john");
const prev = document.querySelectorAll(".prev__btn");
const next = document.querySelectorAll(".next__btn");

john.classList.add("hide");

const slideChange = () => {
    if (john.classList.contains("hide")) {
        john.classList.remove("hide");
        taniya.classList.add("hide");
    } else if (taniya.classList.contains("hide")) {
        taniya.classList.remove("hide");
        john.classList.add("hide");
    } else {
        john.classList.add("hide");
    }
}


prev.forEach(item => item.addEventListener("click", slideChange));
next.forEach(item => item.addEventListener("click", slideChange));
























