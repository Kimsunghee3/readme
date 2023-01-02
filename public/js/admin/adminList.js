const author = document.querySelectorAll('.author')
// const xhr = new XMLHttpRequest()

for (let i = 0; i < author.length; i++) {
    if (author[i].innerHTML == 1) {
        author[i].innerHTML = '이용가능'
    } else {
        author[i].innerHTML = '이용불가'
    }
}

// author.addEventListener('click', () => {

// })