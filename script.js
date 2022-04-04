document.addEventListener("keydown", (e) => {
    let key = document.querySelector(".key")
    let location = document.querySelector(".location")
    let which = document.querySelector(".which")
    let code = document.querySelector(".code")
    let dispWhich = document.querySelector(".display-which")
    let startScreen = document.querySelector(".start-screen")
    let wrapper = document.querySelector(".wrapper")


    let keyDown = e.key
    let keyCode = e.code
    let keyWhich = e.which
    let keyLocation = e.location

    if (keyDown) {
        startScreen.style.display = "none"
        wrapper.style.display = "block"
    }

    key.innerHTML = `<p>${keyDown}</p>`
    location.innerHTML = `<p>${keyLocation}</p>`
    which.innerHTML = `<p>${keyWhich}</p>`
    code.innerHTML = `<p>${keyCode}</p>`
    dispWhich.innerHTML = `<p>${keyWhich}</p>`
})

const textDisplay = document.getElementById("text")
const phrases = ["Press any key to continue...", "Press any key to enter...", "Press any key for keycode..."]

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')
    if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
            isEnd = true
            isDeleting = true
        }

        if (isDeleting && j === 0) {
            currentPhrase = []
            isDeleting = false
            i++
            if (i == phrases.length) {
                i = 0
            }
        }        
    }
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()