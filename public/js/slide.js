let intervalId = 0
let count = 0

const imgs = document.querySelectorAll("#slide > li")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

function findIndex() {
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute("class") === "on") return i
    }
}

function slide() {
    let prev = count === 0 ? imgs.length - 1 : count - 1
    imgs[count].className = "on"
    imgs[prev].className = "off"

    for (let i = 0; i < imgs.length; i++) {
        if (count !== i && prev !== i) imgs[i].className = "zindex"
    }

    if (++count === 3) count = 0
}

function prevHandler(e) {
    clearInterval(intervalId)
    const current = findIndex()
    const index = current === 0 ? imgs.length - 1 : current - 1
    imgs[current].className = "back"
    imgs[index].className = "on"

    for (let i = 0; i < imgs.length; i++) {
        if (current !== i && index !== i) {
            imgs[i].className = "off"
            const slide = document.querySelector("slide")
        }
    }
    count = index
    intervalId = setInterval(slide, 3000)
}

function nextHandler(e) {
    clearInterval(intervalId)
    const current = findIndex()
    const index = current === imgs.length - 1 ? 0 : current + 1
    imgs[current].className = "off"
    imgs[index].className = "on"

    for (let i = 0; i < imgs.length; i++) {
        if (current !== i && index !== i) imgs[i].className = "zindex"
    }
    count = index
    intervalId = setInterval(slide, 3000)
}

prevBtn.addEventListener("click", prevHandler)
nextBtn.addEventListener("click", nextHandler)

slide()
intervalId = setInterval(slide, 3000)
