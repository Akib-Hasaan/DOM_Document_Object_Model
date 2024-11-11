// DOM (Document Object Model)

let input = document.querySelector("input")
let button = document.querySelector("button")
let answer = document.querySelector("span")

button.addEventListener('click', function (){
// Note: Kono kichu korar por kono kichu hobe, eitar jonno .addEventListener use korbo 
    if (input.value >=18) {
// Note: Input er bhitorer jinish dhorar jonno .value use korbo
        answer.innerHTML= "look forward to seeing you! :D"
        answer.style.color="green"
    }
    else{
        answer.innerHTML="think you may not be eligible D:"
        answer.style.color="red"
    }
})