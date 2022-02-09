function addingEventListener() {
    let input = document.querySelector("input#input")
    input.addEventListener("click", clickAlert)
}

function clickAlert() {
    alert("I was clicked")
}
